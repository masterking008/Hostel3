import React, { useEffect, useState } from 'react';

const API_KEY = 'AIzaSyC1lTT_RGPic5Br-cJU0FVrV3LwnS4pQTE';
const SHEET_ID = '1EMPNnc-5QZXgCBDkY667j0U5Il_mJmAocxNNgldM1V8';

const Card = ({ entry }) => (
    <div className="card my-10 mx-5 h-80 w-64 scale-[1.15] sm:scale-100">
        <div className="card__side card__side--front bg-black/25 backdrop-blur-3xl rounded-3xl shadow-xl shadow-slate-900/10 border border-white/10 p-4 text-center transition-all duration-300 h-80 w-64">
            <img
                className="w-48 h-48 rounded-full mx-auto mb-4 object-cover border border-white/10"
                src={entry.image}
                alt={entry.name}
            />
            <h3 className="mt-2 text-xl leading-6 font-bold text-slate-100">{entry.name}</h3>
            <p className="mt-2 text-lg font-lexend text-gray-400">{entry.position}</p>
        </div>
        <div className="card__side card__side--back flex flex-col justify-center items-center bg-black/25 backdrop-blur-3xl rounded-3xl shadow-xl shadow-slate-900/10 border border-white/10 p-4 text-center transition-all duration-300 h-80 w-64">

            <p className="flex items-center justify-center mt-2 text-lg font-lexend text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0 text-slate-100 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                </svg>
                <a href={`tel:+91${entry.phone}`} className="text-slate-100">+91 {entry.phone}</a>
            </p>

            <p className="flex items-center justify-center mt-2 text-lg font-lexend text-gray-400">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 shrink-0 text-slate-100 mr-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                </svg>
                <a href={`mailto:${entry.email}`} className="text-slate-100">{entry.email}</a>
            </p>

        </div>
    </div>
);

const TeamSection = () => {
    const [data, setData] = useState({});
    const [loading, setLoading] = useState(true);
    const roles = [
        { name: 'Warden and Associate Warden', key: 'W' },
        { name: 'Hall Manager', key: 'HM' },
        { name: 'Council Members', key: 'Council' },
        { name: 'Councillors', key: 'Councillors' },
    ];

    const fetchData = async (sheetName) => {
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SHEET_ID}/values/${sheetName}?key=${API_KEY}`;
        try {
            const response = await fetch(url);
            const result = await response.json();
            const rows = result.values.slice(1); // Exclude header row
            return rows.map((row) => ({
                name: row[0],
                position: row[1],
                phone: row[2],
                email: row[3],
                image: row[4],
                linkedin: row[5],
                instagram: row[6],
            }));
        } catch (error) {
            console.error(`Error fetching ${sheetName} data:`, error);
            return [];
        }
    };

    useEffect(() => {
        (async () => {
            const newData = {};
            for (const role of roles) {
                newData[role.key] = await fetchData(role.key);
            }
            setData(newData);
            setLoading(false); // Set loading to false once data is fetched
        })();
    }, []);

    return (
        <div className="py-16 shadow-inner">
            <div className="text-center">
                <h2 className="my-5 text-3xl leading-8 font-extrabold tracking-tight text-gray-50 sm:text-4xl">
                    Hostel 3 Council
                </h2>
            </div>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-slate-100"></div>
                </div>
            ) : (
                roles.map((role) => (
                    <div key={role.key}>
                        <h2 className="text-center m-3 text-3xl leading-8 font-extrabold tracking-tight text-slate-100 sm:text-4xl">
                            {role.name}
                        </h2>
                        <div className="flex justify-center items-center flex-wrap">
                            {data[role.key]?.map((entry, index) => (
                                <Card entry={entry} key={index} />
                            ))}
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default TeamSection;
