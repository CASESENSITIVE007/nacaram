import { Button } from "./ui/button";
import { Card, CardContent, CardHeader } from "./ui/card";

export default function AboutCraftmanship() {
  return (
    <section>

      <Card className="bg-gradient-to-br from-[#efe09f] to-accent ">

        <CardHeader className="py-10 text-center font-bold text-xl">
          About Our Craftmanship
        </CardHeader>
        <CardContent className="p-2 px-6 mb-4 flex flex-col-reverse md:flex-row gap-2">
          <div className="flex flex-col justify-around gap-4">
            <span className="text-left pe-10">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fuga
              quas doloremque unde recusandae voluptate dignissimos placeat
              necessitatibus minus maiores. Sit ullam numquam ad, libero
              nesciunt dolores consequatur obcaecati similique ex?
            </span>

            <Button className="w-1/3 min-w-fit ">Learn More</Button>
          </div>
          <div className="h-80 w-full justify-self-center mb-4 rounded-lg bg-amber-500"></div>

        </CardContent>
      </Card>
    </section>
  );
}
