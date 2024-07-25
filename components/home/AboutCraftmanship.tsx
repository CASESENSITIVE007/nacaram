import Link from "next/link";
import { Button, buttonVariants } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

export default function AboutCraftmanship() {
  return (
    <section>
      <Card className="bg-gradient-to-br from-[#efe09f] to-accent">
        <CardHeader className="py-10 text-center text-xl font-bold">
          About Our Craftmanship
        </CardHeader>
        <CardContent className="mb-4 flex flex-col-reverse gap-2 p-2 px-6 md:flex-row">
          <div className="flex flex-col justify-around gap-4">
            <span className="pe-10 text-left">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quas doloremque unde recusandae voluptate dignissimos placeat
              necessitatibus minus maiores. Sit ullam numquam ad, libero
              nesciunt dolores consequatur obcaecati similique ex?
            </span>
            <Link
              className={cn(
                buttonVariants({ variant: "default" }),
                "w-1/3 min-w-fit",
              )}
              href="/about"
            >
              Learn More
            </Link>
          </div>
          <div className="mb-4 h-80 w-full justify-self-center rounded-lg bg-amber-500"></div>
        </CardContent>
      </Card>
    </section>
  );
}
