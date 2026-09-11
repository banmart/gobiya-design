type Source = { label: string; href: string }
type Section = { id: string; title: string; paragraphs: string[]; checklist?: string[]; source?: Source }
export type Article = {
  slug: string; title: string; topic: string; description: string; takeaway: string;
  sections: Section[]; service: { href: string; label: string; text: string }
}

export const articles: Article[] = [
  {
    slug: 'website-redesign-brief',
    title: 'What to include in a website redesign brief',
    topic: 'Project planning',
    description: 'A practical brief for business owners: define the customer task, gather content, and agree on what a finished website needs to do.',
    takeaway: 'Before discussing colors or layouts, agree on who the site serves, what they need to do, and who will provide the content.',
    sections: [
      {
        id: 'customer-task', title: 'Start with one customer task',
        paragraphs: [
          'A useful redesign brief explains what is difficult today. “Our site looks dated” describes a feeling. “Customers cannot tell which service they need or how to request a quote” gives a designer a problem to solve.',
          'Name your main audience and the action they should be able to complete. For a service business, that might be checking availability, finding the right service, or sending a qualified enquiry. Choose a primary task for each important page rather than asking every page to do everything.',
          'Write down what happens after that action, too. Who receives the enquiry? What information do they need to respond? A form is only useful if someone can act on its contents.',
        ],
      },
      {
        id: 'content', title: 'Collect the material the site will use',
        paragraphs: ['Make a small content inventory before asking for a design estimate. Mark each item as ready, needs an update, or needs to be created. This helps separate design work from writing, photography, and content approval.'],
        checklist: ['Current service descriptions and the questions customers ask before buying.', 'Business name, contact details, address, and opening hours.', 'Original photos, brand files, and examples you have permission to publish.', 'Existing pages or resources that customers still need.', 'The person responsible for approving each piece of content.'],
      },
      {
        id: 'constraints', title: 'Make the boundaries explicit',
        paragraphs: [
          'List the systems the new website must work with: booking software, a customer database, payment tools, or a form destination. Note whether access is available and who owns each account. Avoid putting passwords in the brief.',
          'Share your budget range, desired launch date, and any event that makes the date important. Ask the agency to identify what fits that scope and what can wait. A short list of must-haves is easier to price and deliver than a long list where every item has the same priority.',
        ],
      },
      {
        id: 'acceptance', title: 'Define how you will review the result',
        paragraphs: [
          'Use real tasks as acceptance checks: find a service on a phone, place a call, send an enquiry, and confirm it reaches the right person. Include the content editor’s tasks as well, such as changing hours or replacing a photo.',
          'Plan to involve people with disabilities in feedback where possible, alongside accessibility standards and checks. W3C recommends involving users during web projects; one person’s experience should not be treated as a complete accessibility evaluation.',
        ],
        source: { label: 'W3C: Involving users in web projects', href: 'https://www.w3.org/WAI/planning/involving-users/' },
      },
      {
        id: 'brief-template', title: 'Use this short brief outline',
        paragraphs: ['Bring these answers to your first project conversation. They are a starting point for agreeing on scope, not a requirement to solve the design yourself.'],
        checklist: ['Our main customer is…', 'The task they need to complete is…', 'The current obstacle is…', 'The content and systems we already have are…', 'Our budget, timing, and decision-maker are…', 'We will consider the project ready when…'],
      },
    ],
    service: { href: '/web-design/', label: 'Explore web design', text: 'Ready to turn your brief into a website? See how Gobiya Agency approaches custom design and delivery.' },
  },
  {
    slug: 'google-business-profile-holiday-hours',
    title: 'How to update holiday hours on Google Business Profile',
    topic: 'Business listings',
    description: 'Keep date-specific closures and shorter days accurate on Google without changing your normal weekly schedule.',
    takeaway: 'Use Special hours for short, date-specific changes. Keep a separate record of what must change on your website and booking tools.',
    sections: [
      {
        id: 'choose-hours', title: 'Choose the right type of hours',
        paragraphs: [
          'A holiday closure and a permanent schedule change are different updates. Google’s Special hours lets you set exceptions for specific dates while keeping the regular weekly schedule. Google recommends confirming official holiday hours even when you will follow your usual schedule.',
          'For a closure lasting seven or more consecutive days, Google directs businesses to use Temporarily closed. More hours serves a different purpose: separate hours for particular services. Choose the setting that describes what customers will actually experience.',
        ],
        source: { label: 'Google: Special hours and other operating changes', href: 'https://support.google.com/business/answer/6303076?hl=en' },
      },
      {
        id: 'update-profile', title: 'Enter the dates in your profile',
        paragraphs: ['Open the Business Profile you manage, choose Edit profile, then Hours. Edit Special hours, select the relevant date, and enter the opening and closing times or mark the day closed. Save the change. Review each affected date instead of assuming one entry covers an entire holiday period.'],
        source: { label: 'Google: Steps for setting Special hours', href: 'https://support.google.com/business/answer/6303076?hl=en' },
      },
      {
        id: 'schedule', title: 'Keep one approved schedule',
        paragraphs: [
          'Our recommended workflow is to start with a small shared schedule. Record the date, the customer-facing hours, whether appointments are available, who approved the change, and which channels have been updated. Assign one person to resolve conflicting information.',
          'For example, a business may close its office at 1 PM on a particular Friday while accepting online enquiries all day. That is an illustrative scenario, not a suggested schedule. Decide what “open” means for your location before entering times, and explain any distinction where customers make appointments.',
          'If you operate more than one location, prepare a separate entry for each. Do not copy one branch’s hours to another without checking with the people who run it.',
        ],
      },
      {
        id: 'other-channels', title: 'Update the places customers use next',
        paragraphs: ['Treat the Google edit as one item in an operational checklist. Review the other places a customer might consult or act on those hours. A correct listing does not help someone who then books an unavailable appointment.'],
        checklist: ['Website Contact page and any hours shown in the footer.', 'Booking availability and appointment confirmation messages.', 'Phone greeting and out-of-office reply, if they mention availability.', 'Other business listings you actively maintain.', 'Signs at the location for customers who arrive in person.'],
      },
      {
        id: 'verify', title: 'Check the customer view and close the loop',
        paragraphs: [
          'After making the edits, inspect the public listing and the website as a customer would. Note anything that is still waiting to appear, and check again rather than recording an unverified update as complete.',
          'Set a reminder for the first normal working day after the exception. Remove temporary website notices, check booking availability, and make sure a short-term change has not accidentally become the permanent schedule. Keep the approved record so the next person updating hours knows what happened.',
        ],
      },
    ],
    service: { href: '/seo/', label: 'Explore search optimization', text: 'Need help reviewing your wider local business information? See our search optimization service.' },
  },
  {
    slug: 'ai-search-crawlers-vs-training-bots',
    title: 'AI search crawlers and training bots: what to allow',
    topic: 'Crawler access',
    description: 'Understand the difference between search discovery, model training, and user-requested visits before changing your crawler settings.',
    takeaway: 'Decide separately whether you want search discovery and whether you permit training crawls. A blanket “block AI” setting may combine different decisions.',
    sections: [
      {
        id: 'separate-decisions', title: 'Separate search from training',
        paragraphs: [
          'An AI-related visit to your website does not always serve the same purpose. Before changing a security or crawler setting, identify the operator and what its documented agent does. The phrase “AI bot” alone does not give you enough information to make that decision.',
          'OpenAI distinguishes OAI-SearchBot, which supports discovery in ChatGPT search, from GPTBot, which crawls material that may be used for model training. Its documentation says the two robots.txt settings are independent. Allowing search discovery does not require allowing GPTBot.',
        ],
        source: { label: 'OpenAI: Search and training crawler controls', href: 'https://developers.openai.com/api/docs/bots' },
      },
      {
        id: 'user-visits', title: 'Recognize user-requested visits',
        paragraphs: [
          'OpenAI also describes ChatGPT-User as an agent for certain user-initiated actions, rather than automatic web crawling. Its documentation notes that robots.txt rules may not apply to those visits. It is not the control used to determine search eligibility.',
          'This distinction matters when someone sends you a screenshot of an AI tool reading a page. That observation alone does not establish whether the page was crawled for search or collected for training. Ask which agent made the request before drawing a conclusion.',
        ],
        source: { label: 'OpenAI: ChatGPT-User behavior', href: 'https://developers.openai.com/api/docs/bots' },
      },
      {
        id: 'access-policy', title: 'Write the decision before changing settings',
        paragraphs: ['For a small business, we recommend a short access policy that an owner and developer can both understand. Discuss each provider separately; do not assume one company’s bot names or controls apply to another.'],
        checklist: ['Which public pages should be discoverable through search?', 'Which documented training crawlers should be permitted or declined?', 'Who approves changes to crawler rules and hosting security?', 'Who will recheck provider documentation when settings change?'],
      },
      {
        id: 'privacy', title: 'Keep private information behind authentication',
        paragraphs: [
          'Robots.txt is a set of crawling instructions, not a password. Google warns that some crawlers may ignore it and that a blocked URL can still appear in search without its content. Sensitive information needs access controls, rather than a robots.txt entry.',
          'Review customer files, internal documents, and staging pages separately from public marketing content. Do not paste private URLs into a public instructions file as a way of hiding them. Ask your developer to confirm how those resources are protected.',
        ],
        source: { label: 'Google: What robots.txt can and cannot do', href: 'https://developers.google.com/search/docs/crawling-indexing/robots/intro' },
      },
      {
        id: 'verify', title: 'Verify access without promising visibility',
        paragraphs: [
          'After an approved change, ask your developer to review the live robots.txt file, hosting security rules, and server logs together. A rule in one place is not a complete picture of what reaches the site. Record the provider documentation and the date of the review.',
          'Treat access as a technical permission, not a promise that an AI answer will mention or cite your business. A sensible review establishes what you allow, checks whether the controls match that choice, and leaves you with a record you can revisit.',
        ],
      },
    ],
    service: { href: '/ai-search/', label: 'Explore AI search optimization', text: 'For a broader review of content clarity and crawler access, see our AI search optimization service.' },
  },
]

export function readingMinutes(article: Article) {
  const words = article.sections.flatMap(section => [...section.paragraphs, ...(section.checklist || [])]).join(' ').split(/\s+/).length
  return Math.max(1, Math.ceil(words / 200))
}
