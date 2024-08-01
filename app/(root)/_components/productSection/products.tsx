"use client"
import React, {useEffect} from 'react';
import {ProductCard} from "@/app/(root)/_components";
import useProductsStore from "@/app/store/productStore";

const ProductSection: React.FC = () => {
    const { products, fetchProducts, loading } = useProductsStore();

    useEffect(() => {
        if (products.length === 0) {
            fetchProducts();
        }
    }, [products, fetchProducts]);
    return (
        <section className="mt-10 dark:bg-dark">
            <div className="container mx-auto">
                <div className="flex flex-wrap items-end -mx-4">
                    <div className="w-full px-4 lg:w-2/3">
                        <div className="max-w-[510px] mb-10">
                            <h2
                                className="text-dark dark:text-white text-2xl font-bold  md:text-2xl lg:text-2xl "
                            >
                               Top Featured Products
                            </h2>
                            <p className="text-base text-body-color dark:text-dark-6">
                                Top most popular products based on sales and reviews.
                            </p>
                        </div>
                    </div>


                </div>
                <div className="flex flex-wrap -mx-4">
                    {/*<Carousel opts={{*/}
                    {/*    align: "start",*/}
                    {/*}}*/}
                    {/*          className="w-full "*/}
                    {/*          >*/}
                    {/*    <CarouselContent className="-ml-1">*/}
                    {/*        <CarouselItem className="pl-1 md:basis-1/2 lg:basis-1/2"><ProductCard/></CarouselItem>*/}
                    {/*        <CarouselItem className="pl-1 md:basis-1/4 lg:basis-1/3"><ProductCard/></CarouselItem>*/}
                    {/*        <CarouselItem className="pl-1 md:basis-1/4 lg:basis-1/3"><ProductCard/></CarouselItem>*/}
                    {/*        <CarouselItem className="pl-1 md:basis-1/4 lg:basis-1/3"><ProductCard/></CarouselItem>*/}
                    {/*        <CarouselItem className="pl-1 md:basis-1/4 lg:basis-1/3"><ProductCard/></CarouselItem>*/}



                    {/*    </CarouselContent>*/}
                    {/*    <CarouselPrevious />*/}
                    {/*    <CarouselNext />*/}
                    {/*</Carousel>*/}
                    {loading ? (
                        Array.from({ length: 4 }).map((_, index) => (
                            <div key={index} className="w-full px-4 md:w-1/2 lg:w-1/3 xl:w-1/4 mb-6">
                                <div className="animate-pulse bg-gray-300 h-60 rounded-md"></div>
                            </div>
                        ))
                    ) : (
                        products.slice(0, 4).map((product) => (

                                <ProductCard key={product.product_uuid} product={product} />

                        ))
                    )}
                    {/*<ProductCard/>*/}
                    {/*<ProductCard/>*/}
                    {/*<ProductCard/>*/}
                    {/*<ProductCard/>*/}


                </div>
            </div>
        </section>
    );
};

export default ProductSection;
