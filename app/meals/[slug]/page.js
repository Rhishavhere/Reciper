export default function MealsSlug({params}){
  return(
    <main style={{ color: 'white', textAlign: 'center' }}>
      <h1>This is {params.slug} under Meals</h1>
    </main>
  )
}