import React from 'react';
import Image from 'next/image';
import Sidebar from '../components/Sidebar';
import ProgressSteps from '../components/ProgressSteps';
import { Search } from "lucide-react";
import TabWithChecklist from '../components/Tabs';

const CitingPage3 = () => {
  return (
    <div className="relative min-h-screen font-sans text-gray-800 bg-[url(/background.jpeg)] bg-cover bg-center">
      <div className="flex w-full mx-auto px-6 md:px-10 mt-12 gap-8">
        <div className="w-80 sticky top-24 self-start">
          <Sidebar currentSection="citing" currentStep="mapping" />
        </div>

        <div className="flex-1 bg-white rounded-xl shadow-lg p-6 md:p-8 min-h-screen">
          <form className="flex w-full mx-auto mb-4">
            <div className="relative w-full">
              <div className="absolute left-0 inset-y-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-5 h-5 text-gray-400" />
              </div>

              <input
                type="text"
                id="simple-search"
                className="w-full rounded-lg border border-gray-300 bg-white py-2 pl-10 pr-3 text-sm text-gray-700 placeholder-gray-400 focus:border-gray-400 focus:ring-0"
                placeholder="Outline or mind-map your ideas..."
              />
            </div>
          </form>

          <div className="py-4">
            <ProgressSteps progress={67} />  
          </div>

          <div className="py-6">
            <Image
              src="/CitingHeader.png"
              alt="Citing Header"
              width={1200}
              height={400}
              className="rounded-2xl shadow-md"
            />
          </div>

          <TabWithChecklist pageId="CitingPage3"
            overviewContent={
              <div className="py-4">
                <div className="flex items-center shadow-md mb-6">
                  <div className="w-5 bg-asu-gold self-stretch"></div>
                  <div className="px-4 py-3 bg-white w-full">
                    <h2 className="text-xl font-bold text-gray-900">Section 2</h2>
                  </div>
                </div>

                <h2 className="text-[28px] font-bold mb-4">Verifying that all sources used are cited in the paper</h2>

                <p className="text-[18px] text-black leading-relaxed mb-4">
                  Citation style guides provide rules for quoting and paraphrasing material, formatting your paper, creating a list of sources used, and more. It is important to properly cite all of the sources you have used in a paper. This practice conveys your credibility, gives credit to other researchers and their ideas, allows your readers to find the sources you used, and helps you avoid plagiarism.
                </p>

                <p className="text-[16px] text-gray-800 mb-4">
                  Citing your sources also allows you to engage in a scholarly community and contribute your perspective and knowledge to that community. To avoid plagiarism, make sure you give credit to a source if you present an idea, definition, statistic, recommendation, etc., that is not your original thought.
                </p>

                <div className="border rounded-xl p-4 bg-gray-50 mb-6">
                  <h3 className="text-lg font-bold mb-2">Resource Spotlight: Talk to a Tutor</h3>
                  <p className="text-gray-700">
                    Want to talk it out? <a href="#" className="text-blue-600 underline">Schedule an appointment</a> or drop in to chat with a writing tutor.
                  </p>
                </div>

                <p className="text-[16px] text-gray-800 mb-4">
                  Below are some strategies to help you verify that all of the sources you have used for your paper are appropriately cited.
                </p>

                <h3 className="text-[20px] font-semibold mb-2">Keep track of your sources</h3>
                <p className="text-[16px] text-gray-800 mb-4">
                  Create a tracking system where you collect all of your references and mark when you have used that source in your paper. Consider using:
                </p>
                <ul className="list-disc list-inside space-y-1 text-[16px] text-gray-800 mb-4">
                  <li>A color-coded checklist</li>
                  <li>A Google document</li>
                  <li>An Excel sheet</li>
                </ul>

                <h3 className="text-[20px] font-semibold mb-2">Make an annotated bibliography</h3>
                <p className="text-[16px] text-gray-800 mb-6">
                  While researching for your paper, create an annotated bibliography as you go. An annotated bibliography is a list of sources that have a short summary or annotation about each source. It can also serve as a checklist that you can use to see which sources you have included in your paper and will need to properly cite.
                </p>

                <div className="mt-6">
                  <div className="overflow-x-auto">
                    <div className="min-w-full">
                      <div className="hidden md:grid md:grid-cols-2 md:gap-4 md:items-start md:pb-2 border-b mb-4">
                        <div className="font-semibold text-gray-700">What information would be helpful when tracking your sources?</div>
                        <div className="font-semibold text-gray-700">Your notes</div>
                      </div>

                      <div className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                          <div>
                            <div className="md:hidden text-gray-700 font-medium mb-2">What information would be helpful when tracking your sources?</div>
                            <div className="text-gray-800">
                              Citation details (author, title, year), where used in paper, short summary of relevance.
                            </div>
                          </div>
                          <div>
                            <label htmlFor="q1" className="sr-only">Your notes</label>
                            <textarea
                              id="q1"
                              rows={3}
                              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-gray-400"
                              placeholder="Your text here..."
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                          <div>
                            <div className="md:hidden text-gray-700 font-medium mb-2">What system could allow you to collect this information?</div>
                            <div className="text-gray-800">
                              A shared Google Sheet, citation manager (Zotero/Mendeley), or a color-coded checklist.
                            </div>
                          </div>
                          <div>
                            <label htmlFor="q2" className="sr-only">Your notes</label>
                            <textarea
                              id="q2"
                              rows={3}
                              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-gray-400"
                              placeholder="Your text here..."
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                          <div>
                            <div className="md:hidden text-gray-700 font-medium mb-2">Is this system something you can maintain through your writing process?</div>
                            <div className="text-gray-800">
                              Yes — choose a single system and update it each time you add a source or quote.
                            </div>
                          </div>
                          <div>
                            <label htmlFor="q3" className="sr-only">Your notes</label>
                            <textarea
                              id="q3"
                              rows={3}
                              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-gray-400"
                              placeholder="Your text here..."
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                          <div>
                            <div className="md:hidden text-gray-700 font-medium mb-2">When in your writing process do you plan to update your sources?</div>
                            <div className="text-gray-800">
                              Regularly — after drafting each major section and before final proofreading.
                            </div>
                          </div>
                          <div>
                            <label htmlFor="q4" className="sr-only">Your notes</label>
                            <textarea
                              id="q4"
                              rows={3}
                              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-gray-400"
                              placeholder="Your text here..."
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-start">
                          <div>
                            <div className="md:hidden text-gray-700 font-medium mb-2">When in your writing process do you plan to check your citations for correctness?</div>
                            <div className="text-gray-800">
                              Before submitting: check each in-text citation against the reference list and style guide.
                            </div>
                          </div>
                          <div>
                            <label htmlFor="q5" className="sr-only">Your notes</label>
                            <textarea
                              id="q5"
                              rows={3}
                              className="w-full rounded-lg border border-gray-300 p-3 text-gray-700 placeholder-gray-400 focus:ring-0 focus:border-gray-400"
                              placeholder="Your text here..."
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                </div>
              </div>
            }
          />

          <div className="flex flex-col md:flex-row justify-between items-center p-4 md:p-6 gap-4">
            <a
              href="/CitingPage2"
              className="w-full md:w-auto px-6 py-3 rounded-lg border-2 border-black text-black bg-white hover:bg-gray-100 shadow-sm text-center"
            >
              Go Back to Section 1 of Citing
            </a>
            <a
              href="/CitingPage4"
              className="w-full md:w-auto px-6 py-3 rounded-lg border-2 border-asu-gold bg-black text-white hover:bg-gray-800 shadow-md text-center"
            >
              Continue to Section 3 of Citing
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CitingPage3;