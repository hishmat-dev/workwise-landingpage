import { Tooltip } from 'antd'; 
import 'antd/dist/reset.css';

const modules = [
  { title: "News Feed", icon: "https://workw.com/static/media/News%20Feed.39a4e27ce8d085fd12239c9105e2d300.svg" },
  { title: "Schedules", icon: "https://workw.com/static/media/Schedules.201f16a1c7e5e002f028d81ca96386c2.svg" },
  { title: "Messenger", icon: "https://workw.com/static/media/Messenger.63d53f09d8938f3393b6736e906c183a.svg" },
  { title: "Travel", icon: "https://workw.com/static/media/Travel.07e4191311ead4b827dfa30bca97f853.svg" },
  { title: "Folder", icon: "https://workw.com/static/media/folder.284b44d67616ac0cf9af2431e9d72193.svg" },
  { title: "Projects", icon: "https://workw.com/static/media/Projects.61cb6e89238005785f31f20dda3c29bb.svg" },
  { title: "Expenses", icon: "https://workw.com/static/media/Expenses.bd31b743524bd6ab5aaa3a6aa5117786.svg" },
  { title: "Tasks", icon: "https://workw.com/static/media/Tasks.587227158fc83719bd4b3741dcbd51c2.svg" },
  { title: "Voucher", icon: "https://workw.com/static/media/voucher.d2e0583e43775bea39086d76fc9373c9.svg" },
  { title: "Appraisals", icon: "https://workw.com/static/media/Appraisals.5f733237e87beab2e1e11eab39ec356d.svg" },
  { title: "Reward", icon: "https://workw.com/static/media/rewardIcon.1872d27791f08290da2b85977f16cf07.svg" },
  { title: "Chart Accounts", icon: "https://workw.com/static/media/chartAccountsIcon.aeba4763829d93cab322f702239b7183.svg" },
];

const IconSlider = () => {
  const renderCount = 50;
  const duplicatedModules = Array.from({ length: renderCount }, (_, i) => modules[i % modules.length]);

  return (
    <div className="relative overflow-hidden h-16 flex items-center justify-center group hover:cursor-pointer">
      <div className="absolute inset-0 z-20 pointer-events-none before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-gray-700 before:to-transparent after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-gray-700 after:to-transparent" />

      <div
        className="flex animate-scroll group-hover:[animation-play-state:paused]"
        style={{ width: 'max-content' }}
      >
        {duplicatedModules.map((module, index) => (
          <Tooltip key={index} title={module.title} placement="top">
            <div className="flex-shrink-0 w-14 h-14 flex items-center justify-center">
              <img src={module.icon} alt={module.title} className="h-8 w-8 object-contain" />
            </div>
          </Tooltip>
        ))}
      </div>
    </div>
  );
};

export default IconSlider;
