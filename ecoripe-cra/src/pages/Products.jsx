import ProductCard from '../components/ProductCard';

export default function Products(){
  const items = [
    {title:'Mango', desc:'Multiple varieties; exploring expanded organic program.'},
    {title:'Papaya', desc:'Golden, Maradol; ripeness managed for transit.'},
    {title:'Dragon Fruit', desc:'White & red flesh options, seasonal availability.'},
    {title:'Ginger', desc:'Conventional & organic; strong August–October volumes.'},
    {title:'Turmeric', desc:'Bright color and high curcumin varieties.'},
    {title:'Cassava & Roots', desc:'Cassava, malanga, taro—packed for freshness.'},
  ];
  return (
    <main className="section">
      <div className="container">
        <h2>Products</h2>
        <div className="grid grid-3">
          {items.map(i => <ProductCard key={i.title} {...i} />)}
        </div>
      </div>
    </main>
  )
}
