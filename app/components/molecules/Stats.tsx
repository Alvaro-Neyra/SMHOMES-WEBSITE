import { StatsProps } from "@/app/utils/interfaces";
import StatItem from "../atoms/StatItem";

const Stats: React.FC<StatsProps> = ({ stats }) => {
    return (
        <div className="w-full bg-blackSoft30 py-12 px-4">
            <div className="mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <StatItem
                            key={index}
                            icon={stat.icon}
                            value={stat.value}
                            title={stat.title}
                            duration={stat.duration}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Stats;