import Container from "@/components/Container";
import React from "react";
import { ProductType } from "../../../type";
import { getProducts } from "@/helpers";
import Image from "next/image";
import FormatterPrice from "@/components/FormatterPrice";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const products = await getProducts();
  const _idString = searchParams?._id;
  const _id = Number(_idString);
  const singleProduct = (_id: number) => {
    const item = products.find((product: ProductType) => product._id === _id);
    return item;
  };
  const product = singleProduct(_id);
  return (
    <Container className="flex items-center flex-col md:flex-row px-4 xl:px-0">
      <div className="w-full md:w-1/2 overflow-hidden bg-zinc-50 flex items-center justify-center p-10">
        <Image
          src={product?.image}
          alt="product image"
          width={500}
          height={500}
          className="transform transition-transform hover:scale-110 duration-500"
        />
      </div>
      <div className="w-full md:w-1/2 flex flex-col gap-2">
        <h2 className="text-3xl font-semibold">{product?.title}</h2>
        <p className="flex items-center gap-10">
          <FormatterPrice amount={product?.price} className="text-lg" />
          <FormatterPrice
            amount={product?.previousPrice}
            className="text-zinc-500 line-through"
          />
        </p>
        <p>
          Your Saved{" "}
          <FormatterPrice
            amount={product?.previousPrice - product?.price}
            className="text-base font-semibold bg-designColor underline underline-offset-2"
          />{" "} from this product
        </p>
				<button>add to cart</button>
      </div>
    </Container>
  );
};

export default page;
