import { motion } from 'framer-motion';

const CustomCard = ({ title, description, link }:{title: string, description: string, link: string}) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.05 }} // Scale up on hover
            whileTap={{ scale: 0.95 }} // Scale down on tap
            className="w-full bg-white shadow-lg rounded-lg overflow-hidden"
        >
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 pt-2">{title}</h2>
                <p className="mt-2 text-gray-600">{description}</p>
                <div className="mt-4 flex justify-end">
                    <link href={link}>
                        <p className="text-blue-500 hover:text-blue-700 font-semibold">Read More</p>
                    </link>
                </div>
            </div>
        </motion.div>
    );
};

export default CustomCard;

