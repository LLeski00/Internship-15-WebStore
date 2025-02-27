import { categories } from "../../data/Categories";
import "./Filter.css";

const Filter: React.FC<{ setCategoryFilter: Function }> = ({
    setCategoryFilter,
}) => {
    return (
        <select
            className="filter-bar"
            onChange={(e) => setCategoryFilter(e.target.value)}
        >
            <option value="">Any category</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default Filter;
