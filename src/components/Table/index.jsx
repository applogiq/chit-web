/* ************************** Import Packages *************************** **/
import React from "react";

/* ************************** Import CSS *************************** **/
import styles from "./table.module.css";

const Table = (props) => {
  const { fields, customFileds, data, handleClick } = props;

  const handleOnClick = (e, item, index) => {
    // e.hold();
    handleClick(item, index);
  };

  return (
    <div className="container">
      <div className={`${styles.customTable}`}>
        <table>
          <thead>
            <tr className={`${styles.headcolor} border-light`}>
              {fields?.map((item, index) => (
                <th className="p-3" key={index}>
                  {item?.replace(/([a-z0-9])([A-Z])/g, "$1 $2")}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data?.map((item, itemIndex) => (
              <tr
                className={`${styles.customTableContent}`}
                key={itemIndex}
                onClick={(e) => handleOnClick(e, item, itemIndex)}
              >
                {Array(fields.length)
                  ?.fill(1)
                  ?.map((data, dataIndex) =>
                    customFileds[`${fields?.[dataIndex]}`] ? (
                      <td className="p-1 bg-white" key={dataIndex}>
                        {customFileds[`${fields?.[dataIndex]}`](item)}
                      </td>
                    ) : (
                      <td className="p-1" key={dataIndex}>
                        {item?.[`${fields?.[dataIndex]}`] || "-"}
                      </td>
                    )
                  )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Table;
