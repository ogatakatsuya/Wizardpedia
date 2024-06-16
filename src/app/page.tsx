import Image from "next/image";

export default async function dataIndex() {
  return (
    <>
        <Image src='/_.jpeg' alt='logo' width={1000} height={1000} />
        <p className="text-4xl font-serif text-white">🧙‍♀️ A site by Harry Potter fans for Harry Potter fans 🧙</p>
    </>
  );
}
