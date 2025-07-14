import { propertyHomes } from "@/app/api/propertyhomes";
import ProductCard from "@/components/Home/Properties/Card/Card"; 

const AllCollection: React.FC = () => {
    return (
        <section className='pt-0! pb-20'>
            <div className='container max-w-6xl mx-auto px-5 2xl:px-0'>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10'>
                    {propertyHomes.map((item, index) => (
                        <div key={index} className=''>
                            <ProductCard item={item} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default AllCollection;