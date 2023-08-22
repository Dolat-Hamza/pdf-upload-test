import React from 'react';

const PowerUser = () => {
    const plans = [
        {
            title: 'Free Plan',
            features: [
                'Best Way to Get Started',
                'Customise Style of Flashcards',
                'Multi-lingual Support',
                'Flashcard Amount Customisation',
                'Export to Anki or Quizlet',
                'Limited to 3 PDFs/day',
                '10MB File Upload Limit',
                '5000 Word/PDF Limit',
            ],
        },
        {
            title: 'Monthly Plan',
            features: [
                'All Free Plan Features',
                'Unlimited PDF Uploads',
                '25MB File Upload Limit',
                '10,000 Word/PDF Limit',
                'Ad-free Experience',
            ],
        },
        {
            title: 'Yearly Plan',
            features: [
                'All Basic Plan Features',
                'Priority Customer Support',
                'Advanced Analytics',
                'Custom Card Templates',
                'Collaboration Tools',
                '50MB File Upload Limit',
                '20,000 Word/PDF Limit',
            ],
        },
        {
            title: 'Lifetime Plan',
            features: [
                'All Pro Plan Features',
                'Dedicated Account Manager',
                'Team Management',
                'API Access',
                '100MB File Upload Limit',
                'Unlimited Word/PDF Limit',
                'Exclusive Workshops',
            ],
        },
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-10  py-12">
            <h1 className="text-3xl font-bold text-center mb-6">
                Whether you're cramming for that final 😭 or mastering a new subject 🧐,
                we've got your back 😎
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {plans.map((plan, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg p-6 shadow-md transform hover:scale-105 transition-transform duration-300"
                    >
                        <h2 className="text-xl font-semibold text-center mb-4">{plan.title}</h2>
                        <ul className="list-disc list-inside">
                            {plan.features.map((feature, idx) => (
                                <li key={idx} className="mb-2">
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PowerUser;
