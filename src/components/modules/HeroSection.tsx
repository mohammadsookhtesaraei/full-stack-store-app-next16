import Container from "@/components/container/Container"

const HeroSection = () => {
  return (
    <div>
        <Container>
            <div className="flex gap-x-2 h-125 border border-gray-400/35 rounded-md shadow-md mt-5 p-2">
                <div className="bg-orange-500 w-6/12 h-full rounded-md grid place-content-center">
                <p className="text-white font-bold text-3xl capitalize underline">welcome to my Store</p>
                </div>
                <div className="bg-blue-500 w-6/12 h-full rounded-md">
                </div>
            </div>
        </Container>
    </div>
  )
}

export default HeroSection