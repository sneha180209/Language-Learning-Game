import { useState } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


function StartLearning() {
  const navigate = useNavigate();
  const [language, setLanguage] = useState('english');
  const [difficulty, setDifficulty] = useState('easy');
  const [category, setCategory] = useState('animals');
  const [gameMode, setGameMode] = useState('flashcards');

  const handleLanguageChange=(e)=>{
    setLanguage(e.target.value);
  }
  const handleDifficultyChange=(e)=>{
    setDifficulty(e.target.value);
  }
  const handleCategoryChange=(e)=>{
    setCategory(e.target.value);
  }
  const handleGameModeChange=(e)=>{
    setGameMode(e.target.value);
  }

  const formsubmit = () => {
    if (
      language === 'french' &&
      difficulty === 'easy' &&
      category === 'animals' &&
      gameMode === 'multipleChoice'
    ) {
      navigate('/frencheasyanimalmcq');
    } 
    else if (
      language === 'french' &&
      difficulty === 'easy' &&
      category === 'colors' &&
      gameMode === 'multipleChoice'
    ) {
      navigate('/frencheasycolormcq');
    }
    else if (
      language === 'german' &&
      difficulty === 'easy' &&
      category === 'animals' &&
      gameMode === 'multipleChoice'
    ) {
      navigate('/germaneasyanimalmcq');
    } 
    else if (
      language === 'german' &&
      difficulty === 'easy' &&
      category === 'colors' &&
      gameMode === 'multipleChoice'
    ) {
      navigate('/germaneasycolormcq');
    }
    // else if (language === 'english' && difficulty === 'easy' && category === 'food' && gameMode === 'multipleChoice') {
    //   return <EnglishEasyFoodMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'easy' && category === 'numbers' && gameMode === 'multipleChoice') {
    //   return <EnglishEasyNumbersMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'easy' && category === 'sports' && gameMode === 'multipleChoice') {
    //   return <EnglishEasySportsMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'easy' && category === 'technology' && gameMode === 'multipleChoice') {
    //   return <EnglishEasyTechnologyMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'easy' && category === 'travel' && gameMode === 'multipleChoice') {
    //   return <EnglishEasyTravelMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'easy' && category === 'weather' && gameMode === 'multipleChoice') {
    //   return <EnglishEasyWeatherMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'animals' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumAnimalsMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'colors' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumColorMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'food' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumFoodMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'numbers' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumNumbersMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'sports' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumSportsMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'technology' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumTechnologyMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'travel' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumTravelMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'medium' && category === 'weather' && gameMode === 'multipleChoice') {
    //   return <EnglishMediumWeatherMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'animals' && gameMode === 'multipleChoice') {
    //   return <EnglishHardAnimalsMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'colors' && gameMode === 'multipleChoice') {
    //   return <EnglishHardColorMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'food' && gameMode === 'multipleChoice') {
    //   return <EnglishHardFoodMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'numbers' && gameMode === 'multipleChoice') {
    //   return <EnglishHardNumbersMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'sports' && gameMode === 'multipleChoice') {
    //   return <EnglishHardSportsMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'technology' && gameMode === 'multipleChoice') {
    //   return <EnglishHardTechnologyMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'travel' && gameMode === 'multipleChoice') {
    //   return <EnglishHardTravelMCQ />;
    // }
    // else if (language === 'english' && difficulty === 'hard' && category === 'weather' && gameMode === 'multipleChoice') {
    //   return <EnglishHardWeatherMCQ />;
    // }
    }
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md">
        <form onSubmit={formsubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="languageToLearn">
              Choose a language to learn:
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="languageToLearn"
              name="languageToLearn"
              value={language} onChange={handleLanguageChange}
            >
              <option value="english">English</option>
              <option value="hindi">Hindi</option>
              <option value="french">French</option>
              <option value="german">German</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="difficultyLevel">
              Choose a difficulty level:
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="difficultyLevel"
              name="difficultyLevel"
              value={difficulty} onChange={handleDifficultyChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
              {/* Add more options */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="category">
              Choose a category:
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="category"
              name="category"
              value={category} onChange={handleCategoryChange}
            >
              <option value="animals">Animals</option>
              <option value="colors">Colors</option>
              <option value="food">Food</option>
              <option value="numbers">Numbers</option>
              <option value="sports">Sports</option>
              <option value="technology">Technology</option>
              <option value="travel">Travel</option>
              <option value="weather">Weather</option>

              {/* Add more options */}
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="gameMode">
              Choose a game mode:
            </label>
            <select
              className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="gameMode"
              name="gameMode"
              value={gameMode} onChange={handleGameModeChange}
            >
              <option value="flashcards">Flashcards</option>
              <option value="multipleChoice">Multiple Choice</option>
              <option value="fillInTheBlank">Fill in the Blank</option>
              <option value="matching">Matching</option>
              <option value="typing">Typing</option>

              {/* Add more options */}
            </select>
          </div>

          <div className="text-center">
            <button 
              className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Play
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default StartLearning;
