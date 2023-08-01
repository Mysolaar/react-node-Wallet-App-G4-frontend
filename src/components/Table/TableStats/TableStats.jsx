import formatNumber from "../../../utils/formatNumber.js";
import styles from "./TableStats.module.css";

const TableStats = ({ data }) => {
  console.log("data: ", data);
  console.log("values: ", data.categoryIdValues);
  console.log("Names: ", data.categoryNames);
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th className="table-header">Category</th>
          <th className="table-header">Sum</th>
        </tr>
      </thead>
      <tbody>
        {data.categoryNames.map((item, index) => (
          <tr key={index} className={styles["data-row"]}>
            <td>{item}</td>
            <td>{formatNumber(Number(data.categoryIdValues[index]))}</td>
          </tr>
        ))}
        <tr className={styles.expenses}>
          <td>Expenses:</td>
          <td>{formatNumber(Number(data.expenseValue))}</td>
        </tr>
        <tr className={styles.income}>
          <td>Income:</td>
          <td>{formatNumber(Number(data.incomeValue))}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableStats;
