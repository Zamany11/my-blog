import Image from "next/image";

export default function CoinImage() {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12">
            <div className="flex flex-col p-6 justify-center items-center">
                <div>
                    <h3 className="text-3xl md:text-5xl font-bold mb-5 text-gray-300">Get Paid Instantly And Easily</h3>
                </div>
                <div>
                <p className="text-gray-400">Once you complete a task, your earnings are ready for transfer and can be quickly moved to your bank account. With GoShare, getting paid is simple and hassle-free. If you're looking for the best ways to make money online, GoShare ensures you receive your rewards as soon as they are processed, making it one of the fastest ways to get paid online today.</p>
                </div>
            </div>
            <div>
                <Image 
                src="/coin image.webp"
                width={500}
                height={500}
                alt="Coin Image"
                className="rounded-lg"
                />
            </div>
        </div>
    );
}