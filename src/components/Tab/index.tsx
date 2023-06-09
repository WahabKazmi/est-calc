import { useCallback, useEffect, useState } from "react";
import { ThreeDots } from "react-loader-spinner";
import { Link, useSearchParams } from "react-router-dom";
import { useGetQuestionsByNameQuery } from "../../services/tabs";
import RadioSelector from "../RadioSelector";
import RangeSelector from "../RangeSelector";
import TabError from "./Error";
import "./style.scss";

const tabMenu = [
  {
    name: "Website Development",
    param: "website-development",
  },
  {
    name: "Report Design",
    param: "report-design",
  },
  {
    name: "Video Production",
    param: "video-production",
  },
  {
    name: "Animation",
    param: "animation",
  },
];
const defaultTab = "website-development";

const Tab = () => {
  /* States */
  const [params] = useSearchParams();
  const [isActiveMenu, setIsActiveMenu] = useState(true);
  const [total, setTotal] = useState(0);
  const { data, isError, isLoading } = useGetQuestionsByNameQuery(
    params.get("tab") || defaultTab
  );

  useEffect(() => {
    if (window.innerWidth <= 768) setIsActiveMenu(false);

    function handleResize() {
      if (window.innerWidth <= 768) setIsActiveMenu(false);
      else setIsActiveMenu(true);
    }

    setTotal(0);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [params.get("tab")]);

  /* Helper functions */
  const getActiveTabClass = (currParam: string) => {
    if (!params.get("tab") && currParam === defaultTab) return `active`;
    else if (currParam === params.get("tab")) return `active`;
    else return "";
  };

  const getCurrentTabName = () => {
    return tabMenu.find((menu) => menu.param === params.get("tab"))?.name;
  };

  /* Handlers */
  const handleChange = useCallback(
    (prevValue: number, newValue: number) => {
      console.log({prevValue, newValue})
      if (total !== 0) {
        let scoppedTotal = 0;
        scoppedTotal = total - prevValue;
        scoppedTotal += newValue;
        setTotal(scoppedTotal);
      } else {
        setTotal(newValue)
      }
    },
    [total]
  );

  return (
    <div className="tab">
      <div className="tab-menu-wrapper">
        <div className="menu-selector">
          <button
            type="button"
            className="btn text-center"
            onClick={() => setIsActiveMenu(true)}
          >
            {getCurrentTabName()}
          </button>
        </div>
        {isActiveMenu && (
          <ul>
            {tabMenu.map(({ name, param }) => {
              return (
                <li key={name}>
                  <Link
                    className={`btn text-center ${getActiveTabClass(param)}`}
                    to={`?tab=${param}`}
                  >
                    {name}
                  </Link>
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <div className="tab-content">
        <div className="tab-body">
          {isLoading ? (
            <ThreeDots
              height="80"
              width="80"
              radius="9"
              color="#1199bd"
              ariaLabel="three-dots-loading"
              wrapperStyle={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
              visible={true}
            />
          ) : isError ? (
            <TabError />
          ) : (
            data?.questions.map(
              (
                { type, min, max, price, name, radio, group }: QuestionType,
                key: string
              ) => {
                return (
                  <div className="question-wrapper" key={key}>
                    {type === "slider" ? (
                      <RangeSelector
                        {...{
                          min,
                          max,
                          price,
                          name,
                          handleChange,
                          key: params.get("tab"),
                        }}
                      />
                    ) : (
                      <RadioSelector
                        {...{ name, radio, group, handleChange, key }}
                      />
                    )}
                  </div>
                );
              }
            )
          )}
        </div>
      </div>
      <div className="tab-total">
        <h3>Total: {total}</h3>
      </div>
    </div>
  );
};

export default Tab;
