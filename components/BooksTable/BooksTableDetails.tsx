import Image from "next/image";
import React from "react";
import TextWithExpand from "../TextWithExpand ";
import { Card, CardContent } from "../ui/card";

const BooksTableDetails = ({ item }: { item: Book }) => {
  return (
    <article className=" lg:mx-auto max-w-md sm:max-w-2xl md:max-w-2xl lg:max-w-3xl">
      <Card className="flex flex-col sm:flex-row items-center">
        <div className="relative w-48 h-72 flex-shrink-0 my-6 sm:my-0">
          <Image
            src={item.volumeInfo.imageLinks.thumbnail}
            alt={item.volumeInfo.title}
            fill={true}
            className="object-cover rounded-lg"
          />
        </div>
        <CardContent className="ml-2 flex-1">
          <header>
            <h1 className="font-semibold text-base mb-2">
              {item.volumeInfo.title}
            </h1>
          </header>
          <section className="mb-4">
            <TextWithExpand
              className={"text-xs md:text-sm"}
              text={item.volumeInfo.description}
              maxHeight={100}
              expandText="Show more..."
              collapseText="Show less..."
            />
          </section>
          <footer>
            <p className="text-sm text-muted-foreground mb-2">
              Published Date: {item.volumeInfo.publishedDate}
            </p>
            <p className="text-sm text-muted-foreground">
              Authors: {item.volumeInfo.authors.join(", ")}
            </p>
          </footer>
        </CardContent>
      </Card>
    </article>
  );
};

export default BooksTableDetails;
