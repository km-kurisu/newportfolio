import { useState, useEffect, useCallback } from 'react';

const JokeSection = () => {
  const [joke, setJoke] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchJoke = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://v2.jokeapi.dev/joke/Programming?blacklistFlags=racist,sexist,explicit&type=single');
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      if (data.error) {
        throw new Error(data.message || 'Joke API error');
      }
      if (data.joke) {
        setJoke(data.joke);
      } else {
        setJoke('No joke found this time. Try again!');
      }
    } catch (err) {
      console.error('Error fetching joke:', err);
      setError(err.message || 'Failed to fetch a joke.');
      setJoke(''); // Clear previous joke on error
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchJoke();
  }, [fetchJoke]);

  return (
    <section className="max-w-xl mx-auto my-12 px-4">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg border border-gray-200 dark:border-gray-700">
        <div className="mb-4 text-center">
          <h2 className="text-2xl font-semibold text-blue-600 dark:text-blue-400">💡 Random Programming Joke</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">A bit of humor to debug your day</p>
        </div>

        <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 text-center min-h-[100px] flex items-center justify-center">
          {isLoading && <p className="text-gray-700 dark:text-gray-300 text-lg">Loading joke...</p>}
          {!isLoading && error && <p className="text-red-500 dark:text-red-400 text-lg">{error}</p>}
          {!isLoading && !error && joke && <p className="text-gray-700 dark:text-gray-300 text-lg">{joke}</p>}
        </div>

        <div className="mt-6 flex justify-center">
          <button
            onClick={fetchJoke}
            disabled={isLoading}
            className="bg-blue-500 hover:bg-blue-600 disabled:bg-blue-300 dark:disabled:bg-blue-800 text-white font-medium px-6 py-2 rounded-full transition duration-300 flex items-center"
          >
            <i className={`fas fa-sync-alt mr-2 ${isLoading ? 'animate-spin' : ''}`}></i>
            {isLoading ? 'Fetching...' : 'Get Another Joke'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default JokeSection;