function Plan() {
  return (
    <div className="body">
      <div className="main-block">
        <div className="center-block w-100">
          <div className="font-roboto bg-[#F9FAFB] min-h-screen w-100">
            <div className="flex justify-between items-center max-w-6xl mx-auto">
              <div className="title">
                <div className="font-32">План интенсива</div>
              </div>
            </div>

            <div className="flex flex-col items-start px-4">

              <div className="flex items-start self-stretch px-4">
                <div className="flex flex-col justify-center items-start px-4 py-4 mt-7 w-full leading-[150%] max-md:max-w-full">
                  <div className="text-lg font-bold tracking-tighter leading-10 text-neutral-900">
                    Этап N: Название этапа
                  </div>
                  <div className="mt-2.5 text-sm text-slate-500">
                    ДД.ММ.ГГ - ДД.ММ.ГГ
                  </div>
                  <div className="flex p-4 gap-4 self-stretch pr-20 pl-2.5 mt-8 max-md:flex-wrap max-md:pr-5">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/4c52598e48a7b62724fc32f6709ff87fe408e7418fc4cedb28c713d76c2c7279?apiKey=d356808278d742219dce7d95e695ad7e&"
                      className="shrink-0 my-auto aspect-[1.79] fill-black w-[18px] px-4"
                    />
                    <div className="flex flex-col justify-center ">
                      <div className="text-base text-neutral-900">
                        Наименование мероприятия
                      </div>
                      <div className="text-sm text-slate-500">
                        ДД.ММ.ГГ - ДД.ММ.ГГ
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Plan;
