import { categories } from "../../data/Categories";

const Filter: React.FC<{ setCategoryFilter: Function }> = ({
    setCategoryFilter,
}) => {
    return (
        <select onChange={(e) => setCategoryFilter(e.target.value)}>
            <option value="">Select category</option>
            {categories.map((category) => (
                <option key={category} value={category}>
                    {category}
                </option>
            ))}
        </select>
    );
};

export default Filter;
