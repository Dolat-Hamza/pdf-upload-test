import Link from 'next/link';
import Image from 'next/image';

const Xon = () => {
    return (
        <div className=" min-h-screen py-8 flex flex-col justify-center items-center">
            <header className="text-center">
                <h1 className="text-4xl font-bold text-blue-600">
                    Introducing Xon - An Anki Replacement, But Better
                </h1>
            </header>

            <main className="container mx-auto mt-8 flex flex-col items-center">
                <div className="w-full rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="https://storage.tally.so/30b6464a-c0b3-40af-ab29-0cfa58bc29f0/Frame-14-3-.png"
                        alt="Xon Logo"
                        width={800}
                        height={400}
                        layout="responsive"
                    />
                </div>

                <section className="mt-8 w-full bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-bold mb-4 text-blue-600">What is Xon - The Anki Replacement?</h2>
                    <p className="text-gray-800">
                        Xon is a complete Spaced Repetition System (SRS) which will be as powerful and customizable as Anki, yet also easy to use and user-friendly like Quizlet. Some notable features:
                    </p>
                    <ul className="list-disc pl-6 text-gray-700">
                        <li className="mb-2">User-friendly UI and UX</li>
                        <li className="mb-2">Collaborative flashcard creation and leaderboards</li>
                        <li className="mb-2">Real-time sync across web and mobile</li>
                        <li className="mb-2">Relational learning</li>
                        <li className="mb-2">PDF2Xon/Anki</li>
                    </ul>
                </section>

                <section className="mt-8 w-full bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Mission</h2>
                    <p className="text-gray-800">
                        To build the best-spaced repetition flashcard app in the world through good UI, community, collaboration, AI, and evidence-based study techniques.
                    </p>
                </section>

                <section className="mt-8 w-full bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-3xl font-bold mb-4 text-blue-600">Our Vision</h2>
                    <p className="text-gray-800">
                        To make flashcard learning mainstream, intuitive, and fun with friends.
                    </p>
                </section>


                <section className="mt-8 w-full">
                    <form className="flex flex-col items-center">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-2 border border-gray-300 rounded mb-4"
                            // Add any other email input properties you need, e.g., onChange, value, etc.
                        />
                        <textarea
                            placeholder="What are some of the pain points of using Anki/Quizlet/Remnote?"
                            className="w-full p-2 border border-gray-300 rounded mb-4 h-32"
                            // Add any other textarea properties you need
                        />
                        <button
                            type="submit"
                            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </main>
        </div>
    );
};

export default Xon;
