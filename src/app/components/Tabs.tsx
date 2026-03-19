'use client'
import { useState } from "react";

const tabs = [
    { id: "overview", label: "Overview" },
    { id: "checklist", label: "Checklist" },
    { id: "tools", label: "Tools" },
];

const ALL_CHECKLIST_ITEMS: Record<string, { id: number; title: string; description: string }[]> = {
    AnalysingPage2: [
        { id: 1, title: "I've highlighted the key nouns of the assignment description.", description: "Nouns will describe the subject of your paper such as a person/group of people, an event, or a particular text." },
        { id: 2, title: "I've highlighted the key verbs of the assignment description.", description: "Verbs will describe the type of paper you're writing." },
        { id: 3, title: "I can explain the assignment in my own words in 2–3 sentences.", description: "" },
        { id: 4, title: "I've written down at least one clarifying question if anything is unclear.", description: "" },
    ],
    AnalysingPage3: [
        { id: 1, title: "I've identified my intended audience and know their role or relationship to my topic.", description: "Think beyond just 'my professor'." },
        { id: 2, title: "I know what my audience likely already knows about the topic.", description: "" },
        { id: 3, title: "I've identified what background information my audience will need.", description: "Consider examples, background, definitions, and evidence." },
        { id: 4, title: "I've considered the best way to organize and present the information for my audience.", description: "Think about tone, formality, and order of ideas." },
    ],
    AnalysingPage4: [
        { id: 1, title: "I've reviewed each rubric category and highlighted key words that describe expectations and evaluation criteria.", description: "" },
        { id: 2, title: "I've created a summary of what a high score in each category would look like.", description: "" },
        { id: 3, title: "I created a checklist that I can reference while drafting and revising my writing.", description: "" },
        { id: 4, title: "I've written down at least one question about rubric expectations (if needed).", description: "" },
    ],
    BrainstormingPage2: [
        { id: 1, title: "My thesis answers the assignment prompt directly.", description: "" },
        { id: 2, title: "My thesis makes a claim (not just a topic statement).", description: "" },
        { id: 3, title: "My thesis is specific and focused (not overly broad).", description: "" },
        { id: 4, title: "I can list 2–4 main points that support my thesis.", description: "" },
    ],
    BrainstormingPage3: [
        { id: 1, title: "I've created a basic structure (intro, main points, conclusion).", description: "" },
        { id: 2, title: "Each body section connects clearly to my thesis.", description: "" },
        { id: 3, title: "I've noted where evidence will go in each section.", description: "" },
        { id: 4, title: "I've identified at least one area that needs development.", description: "" },
    ],
    BrainstormingPage4: [
        { id: 1, title: "I've listed what I already know about my topic.", description: "" },
        { id: 2, title: "I've identified at least 3 questions I still need to answer.", description: "" },
        { id: 3, title: "I've noted possible counterarguments.", description: "" },
        { id: 4, title: "I've created a short research to-do list.", description: "" },
    ],
    ResearchingPage2: [
        { id: 1, title: "I've decided what type(s) of sources I need.", description: "" },
        { id: 2, title: "I've identified 5–6 strong keywords for searching.", description: "" },
        { id: 3, title: "I've identified 3–5 potential sources.", description: "" },
        { id: 4, title: "I understand how my sources contribute to my thesis.", description: "" },
    ],
    ResearchingPage3: [
        { id: 1, title: "I've identified the author's main claim.", description: "" },
        { id: 2, title: "I've written down any questions or thoughts I have about the source.", description: "" },
        { id: 3, title: "I've evaluated the credibility of the source.", description: "" },
        { id: 4, title: "I've written down how the source connects to my argument.", description: "" },
    ],
    ResearchingPage4: [
        { id: 1, title: "I've written the full citation information for each source.", description: "" },
        { id: 2, title: "I've written a brief summary of each source based on my notes.", description: "" },
        { id: 3, title: "I've included the main ideas and my thoughts in my summary.", description: "" },
        { id: 4, title: "I've organized sources (alphabetically, thematically, or chronologically).", description: "" },
    ],
    DraftingPage2: [
        { id: 1, title: "My introduction clearly presents my thesis.", description: "" },
        { id: 2, title: "My thesis explains both what I argue and why it matters.", description: "" },
        { id: 3, title: "I've verified that my planned paragraphs support my thesis.", description: "" },
        { id: 4, title: "I can see how each of my sources engages with my thesis.", description: "" },
    ],
    DraftingPage3: [
        { id: 1, title: "I've connected each quotation or paraphrase to my argument.", description: "" },
        { id: 2, title: "I've balanced summary and synthesis.", description: "" },
        { id: 3, title: "I've explained how each piece of evidence supports my claim.", description: "" },
        { id: 4, title: "I've cited all evidence properly in-text.", description: "" },
    ],
    DraftingPage4: [
        { id: 1, title: "I've identified at least one opposing viewpoint.", description: "" },
        { id: 2, title: "I've represented opposing views fairly.", description: "" },
        { id: 3, title: "I've explained why my argument still holds.", description: "" },
        { id: 4, title: "I've clarified the limits or scope of my claim.", description: "" },
    ],
    RevisionPage2: [
        { id: 1, title: "I've created a copy of my draft to rework and review my paragraphs.", description: "" },
        { id: 2, title: "Each paragraph clearly connects to my thesis.", description: "" },
        { id: 3, title: "My paragraphs follow a logical progression.", description: "" },
        { id: 4, title: "I've removed or reorganized repetitive or unfocused sections.", description: "" },
    ],
    RevisionPage3: [
        { id: 1, title: "I've answered the \"so what?\" questions in my draft.", description: "" },
        { id: 2, title: "I've revised my use of summary to include my analysis and commentary.", description: "" },
        { id: 3, title: "My own perspective is clear and present.", description: "" },
        { id: 4, title: "My sources are in conversation with each other.", description: "" },
    ],
    RevisionPage4: [
        { id: 1, title: "My evidence is relevant and credible (ethos).", description: "" },
        { id: 2, title: "My reasoning flows logically and supports my claim (logos).", description: "" },
        { id: 3, title: "I've clarified why my argument matters (pathos).", description: "" },
        { id: 4, title: "My tone and framing fit the audience and context (kairos).", description: "" },
    ],
    EditingPage2: [
        { id: 1, title: "I've read my paper aloud.", description: "" },
        { id: 2, title: "I've checked for common personal grammar patterns.", description: "" },
        { id: 3, title: "I've reviewed my editing checklist.", description: "" },
        { id: 4, title: "I've asked for feedback from a trusted reader.", description: "" },
    ],
    EditingPage3: [
        { id: 1, title: "My paragraphs create a logical flow through my paper.", description: "" },
        { id: 2, title: "I've verified that my transitional words establish the correct relationship between ideas.", description: "" },
        { id: 3, title: "I've repeated key terms strategically for cohesion.", description: "" },
        { id: 4, title: "I've checked my sentences for a cohesive flow.", description: "" },
    ],
    EditingPage4: [
        { id: 1, title: "My tone matches the assignment's purpose and audience.", description: "" },
        { id: 2, title: "I've checked to make sure I am using words correctly.", description: "" },
        { id: 3, title: "I've replaced vague words with precise language.", description: "" },
        { id: 4, title: "I've eliminated unnecessary filler words.", description: "" },
    ],
    CitingPage2: [
        { id: 1, title: "I've checked my citations against the most recent edition of the style guide.", description: "" },
        { id: 2, title: "My title page, headers, spacing, and margins follow guidelines.", description: "" },
        { id: 3, title: "My reference page is formatted correctly.", description: "" },
        { id: 4, title: "I created a list of any questions for my professor.", description: "" },
    ],
    CitingPage3: [
        { id: 1, title: "I have a method for tracking the sources I used in my paper.", description: "" },
        { id: 2, title: "I've cited any quotes, summaries, and paraphrased information in my paper.", description: "" },
        { id: 3, title: "Every in-text citation appears in the reference list.", description: "" },
        { id: 4, title: "I've checked my paper to ensure my original ideas are differentiated from my sources.", description: "" },
    ],
    CitingPage4: [
        { id: 1, title: "I've verified whether my citation style requires footnotes, endnotes, or in-text citations.", description: "" },
        { id: 2, title: "I've verified that all reference entries are correctly structured and ordered.", description: "" },
        { id: 3, title: "I've formatted (italics, capitalization, hanging indents) my citations correctly.", description: "" },
        { id: 4, title: "I've double-checked citation accuracy against the style manual.", description: "" },
    ],
};

const CHECKLIST_TITLES: Record<string, string> = {
    AnalysingPage2: "Reading My Assignment Description",
    AnalysingPage3: "Understanding My Audience",
    AnalysingPage4: "Understanding the Rubric",
    BrainstormingPage2: "Developing a Preliminary Thesis or Research Question",
    BrainstormingPage3: "Outlining or Mind-Mapping My Ideas",
    BrainstormingPage4: "Identifying Gaps or Questions",
    ResearchingPage2: "Understanding My Topic & Searching for Sources",
    ResearchingPage3: "Reading & Evaluating My Sources",
    ResearchingPage4: "Tracking My Research",
    DraftingPage2: "Writing My Thesis or Argument",
    DraftingPage3: "Integrating Evidence",
    DraftingPage4: "Addressing Counterarguments",
    RevisionPage2: "Considering the Order of Ideas",
    RevisionPage3: "Establishing My Voice & Perspective",
    RevisionPage4: "Measuring Argument Effectiveness",
    EditingPage2: "Checking Grammar & Punctuation",
    EditingPage3: "Improving Flow Between Sentences & Paragraphs",
    EditingPage4: "Considering Word Choice",
    CitingPage2: "Checking Formatting",
    CitingPage3: "Verifying Sources Are Cited",
    CitingPage4: "Matching Citations to Style Guide",
};

export default function TabWithChecklist({
    overviewContent,
    pageId,
    completedCount,
    totalCount,
}: {
    overviewContent: React.ReactNode;
    pageId: string;
    completedCount?: number;
    totalCount?: number;
}) {
    const [activeTab, setActiveTab] = useState("overview");
    const [completed, setCompleted] = useState<number[]>([]);

    const checklistItems = ALL_CHECKLIST_ITEMS[pageId] ?? [];
    const checklistTitle = CHECKLIST_TITLES[pageId] ?? "Checklist";

    const toggleItem = (id: number) => {
        setCompleted((prev) =>
            prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]
        );
    };

    const progress = checklistItems.length > 0
        ? (completed.length / checklistItems.length) * 100
        : 0;

    return (
        <div className="w-full">
            <div className="flex items-center justify-between mb-6">
                <div className="flex flex-1 bg-gray-200 rounded-lg overflow-hidden">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-3 text-center font-semibold transition ${activeTab === tab.id
                                ? "bg-asu-gold text-black"
                                : "hover:bg-gray-300 text-black"
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                {(completedCount !== undefined && totalCount !== undefined) && (
                    <div className="ml-4 px-4 py-1 text-xs font-medium bg-amber-50 text-red-700 rounded-full shadow-sm">
                        {completedCount} out of {totalCount} completed
                    </div>
                )}
            </div>

            {activeTab === "overview" && <div>{overviewContent}</div>}

            {activeTab === "checklist" && (
                <div className="bg-white border rounded-xl shadow-md p-6 py-4">
                    <div className="flex justify-between items-center mb-2">
                        <h2 className="text-xl font-bold">{checklistTitle}</h2>
                        <span className="text-sm text-gray-600">
                            {completed.length} out of {checklistItems.length} completed
                        </span>
                    </div>

                    <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
                        <div
                            className="h-2 bg-[#01673e] rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>

                    <div className="space-y-4">
                        {checklistItems.map((item) => (
                            <button
                                key={item.id}
                                onClick={() => toggleItem(item.id)}
                                className={`w-full flex items-start gap-3 p-4 border rounded-lg shadow-sm text-left transition ${completed.includes(item.id)
                                    ? "bg-[#09FF84] border-[#01673E]"
                                    : "bg-white hover:bg-gray-50"
                                    }`}
                            >
                                <div
                                    className={`w-5 h-5 mt-1 rounded-full border-2 flex items-center justify-center flex-shrink-0 ${completed.includes(item.id)
                                        ? "bg-[#01673e] border-[#01673e]"
                                        : "border-gray-400"
                                        }`}
                                >
                                    {completed.includes(item.id) && (
                                        <span className="w-2.5 h-2.5 bg-white rounded-full"></span>
                                    )}
                                </div>

                                <div>
                                    <p className="font-semibold">{item.title}</p>
                                    {item.description && (
                                        <p className="text-sm text-gray-600 mt-1">
                                            {item.description}
                                        </p>
                                    )}
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            )}

            {activeTab === "tools" && (
                <div>
                    <h2 className="text-xl font-bold mb-2 py-4">Tools</h2>
                    <p className="text-gray-700">
                        Here you can find helpful resources and tools for your writing.
                    </p>
                </div>
            )}
        </div>
    );
}