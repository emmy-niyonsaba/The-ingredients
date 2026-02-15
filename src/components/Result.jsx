import React, { useEffect, useState } from 'react'

const Result = ({ ingredients = [], onClose }) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [recipe, setRecipe] = useState(null)

  useEffect(() => {
    if (!ingredients || ingredients.length === 0) return

    const controller = new AbortController()
    const fetchRecipe = async () => {
      setLoading(true)
      setError(null)
      setRecipe(null)
      try {
        const prompt = `You are a helpful chef. Create a clear, concise recipe using ONLY the provided ingredients. Do NOT add any new ingredients. If absolutely necessary, you may add at most ONE essential staple (salt OR pepper OR oil) and explicitly mark it in the ingredients list as "added staple". Return ONLY valid JSON with keys: title, ingredients (array), instructions (array of steps), notes (short). Ingredients list: ${JSON.stringify(ingredients)}.`

        const res = await fetch('https://api.openai.com/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
          },
          body: JSON.stringify({
            model: 'gpt-4o-mini',
            messages: [
              { role: 'system', content: 'You are a professional chef and recipe writer.' },
              { role: 'user', content: prompt },
            ],
            max_tokens: 800,
            temperature: 0.6,
          }),
          signal: controller.signal,
        })

        if (!res.ok) {
          const text = await res.text()
          throw new Error(`OpenAI error: ${res.status} ${text}`)
        }

        const data = await res.json()
        const content = data?.choices?.[0]?.message?.content || ''

        let parsed = null
        try {
          parsed = JSON.parse(content)
        } catch (e) {
          // If model didn't return strict JSON, wrap as text
          parsed = { text: content }
        }

        setRecipe(parsed)
      } catch (err) {
        if (err.name !== 'AbortError') setError(err.message || 'Unknown error')
      } finally {
        setLoading(false)
      }
    }

    fetchRecipe()
    return () => controller.abort()
  }, [ingredients])

  return (
    <div className="max-w-2xl mx-auto mt-10 bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-bold">AI-generated Recipe</h2>
        <button onClick={onClose} className="text-sm text-gray-600 hover:underline">Close</button>
      </div>

      {loading && <p>Generating recipe from your ingredients…</p>}
      {error && <p className="text-red-500">Error: {error}</p>}

      {!loading && recipe && (
        <article aria-live="polite">
          {recipe.title && <h3 className="text-xl font-semibold">{recipe.title}</h3>}

          {Array.isArray(recipe.ingredients) ? (
            <>
              <strong>Ingredients:</strong>
              <ul className="list-disc ml-6 mb-3">
                {recipe.ingredients.map((ing, i) => (
                  <li key={i}>{ing}</li>
                ))}
              </ul>
            </>
          ) : (
            recipe.text && <pre className="whitespace-pre-wrap">{recipe.text}</pre>
          )}

          {Array.isArray(recipe.instructions) && (
            <>
              <strong>Instructions:</strong>
              <ol className="list-decimal ml-6">
                {recipe.instructions.map((step, i) => (
                  <li key={i} className="mb-1">{step}</li>
                ))}
              </ol>
            </>
          )}

          {recipe.notes && <p className="mt-3 text-sm text-gray-600">Notes: {recipe.notes}</p>}
        </article>
      )}
    </div>
  )
}

export default Result
