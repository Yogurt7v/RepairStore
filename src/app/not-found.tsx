import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className=" px-2 w-full">
      <div className="mx-auto py-4 flex flex-col justify-center items-center gap-4">
        <h2 className="text-2xl">Page not found</h2>
        <Link href="/">
          <Image
            className="m-0 rounded-xl"
            src="/images/404.jpg"
            width={400}
            height={300}
            sizes="300px"
            alt="404"
          />
        </Link>
      </div>
    </div>
  );
}
