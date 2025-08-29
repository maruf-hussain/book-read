import bannerImg from '../../assets/istockphoto-1284954462-612x612.webp'

export default function Banner() {
    return (
        <div className=" bg-base-300">
            <div className="hero-content flex-col justify-around lg:flex-row-reverse">
                <img
                    src={bannerImg}
                    className="max-w-sm rounded-lg shadow-2xl"
                />
               
                <div>
                    <h1 className="text-5xl font-bold text-green-600">Maruf Library</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut  <br />excepturi exercitationem
                        quasi.
                    </p>
                    <button className="btn bg-green-600">Read Book</button>
                </div>
            </div>
        </div>
    )
}
