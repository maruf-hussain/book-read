

export default function Book({book}) {
    const {bookName,author,image} = book;
  return (
   <div className="card bg-base-300 shadow-sm">
  <figure>
    <img className="w-48 h-56 p-4"
      src={image}
      alt="book" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
      Card Title
      <div className="badge badge-secondary">NEW</div>
    </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions justify-end">
      <div className="badge badge-outline">Fashion</div>
      <div className="badge badge-outline">Products</div>
    </div>
  </div>
</div>
  )
}
