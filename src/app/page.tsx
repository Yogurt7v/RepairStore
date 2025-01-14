import Link from 'next/link';

export default function Home() {
  return (
    <div className="bg-black bg-home-img bg-cover bg-center">
      <main className="flex flex-col justify-center text-center max-w-5xl mx-auto h-dvh">
        <div className="flex flex-col gap-6 p-12 rounded-xl bg-black/90 w-4/5 sm:max-w-96 mx-auto text-white sm:text-2xl">
          <h1>Simple Card</h1>
          <h2>Repair Shop</h2>
          <address>
            192000 Saint Petersburg <br />
            Galernya st. 33. office 312
          </address>
          <p>Open Daily: 9-00 to 20-00</p>
          <Link href="tel:89113452216" className="hover:underline">
            8(911)345-22-16
          </Link>
        </div>
      </main>
    </div>
  );
}
