const AnnouncementData = [
  {
    text: 'Power outage in lab 2',
    dateTime: '11:10 AM 07-10-2024',
    place: 'Physics Department',
  },
  {
    text: 'New COVID guidelines issued',
    dateTime: '05:20 PM 06-10-2024',
    place: 'Main Admin Office',
  },
  {
    text: 'Library will be closed for maintenance',
    dateTime: '09:00 AM 08-10-2024',
    place: 'Central Library',
  },
  {
    text: 'Workshop on AI rescheduled',
    dateTime: '02:00 PM 05-10-2024',
    place: 'Computer Science Dept',
  },
  {
    text: 'New canteen opens next week',
    dateTime: '01:30 PM 04-10-2024',
    place: 'Hostel 12',
  },
];

export default function Announcements() {
  return (
    <div className="bg-transparent p-10 relative z-10 border-t border-gray-200 shadow-inner">
      <h2 className="text-3xl leading-8 mt-10 font-lexend tracking-tight text-gray-900 sm:text-[40px] text-center">
        Announcements</h2>
      <ul
        role="list"
        className="grid grid-cols-1 mt-6 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {AnnouncementData.map((Announcement, index) => (
          <li
            key={Announcement.text}
            className={`flex justify-between gap-x-6 p-5 transition-all duration-300 ease-in-out hover:bg-gray-100 
            ${index % 3 !== 2 ? 'border-r border-gray-200' : ''}`}
          >
            <div className="flex min-w-0 gap-x-4">
              <div className="min-w-0 flex-auto">
                <p className="font-semibold leading-6 text-gray-900">{Announcement.text}</p>
                <p className="mt-1 truncate text-xs leading-5 text-gray-500">{Announcement.place}</p>
              </div>
            </div>
            <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
              <p className="text-sm leading-6 text-gray-900">{Announcement.dateTime}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
