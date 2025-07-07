import React, { useState } from 'react';
import { Calendar, dateFnsLocalizer, Views } from 'react-big-calendar';
import format from 'date-fns/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from 'date-fns/getDay';
import enUS from 'date-fns/locale/en-US';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const THEME_COLOR = '#562583';

const locales = {
  'en-US': enUS,
};

const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

const eventTypes = [
  { label: 'analysis', color: '#e57373' },
  { label: 'analysis report', color: '#ba68c8' },
  { label: 'appendices', color: '#ffd54f' },
  { label: 'benefits', color: '#4fc3f7' },
  { label: 'budget', color: '#81c784' },
  { label: 'charts', color: '#64b5f6' },
  { label: 'costings', color: '#ffb74d' },
  { label: 'finance', color: '#9575cd' },
  { label: 'growth', color: '#aed581' },
  { label: 'legal', color: '#4dd0e1' },
  { label: 'imagery', color: '#f06292' },
  { label: 'important', color: '#ff8a65' },
  { label: 'logos', color: '#7986cb' },
  { label: 'review', color: '#a18cd1' },
  { label: 'market', color: '#ffd54f' },
  { label: 'today', color: THEME_COLOR },
];

const calendars = [
  { label: 'Project Workspace', color: THEME_COLOR },
  { label: 'Concept', color: '#26a69a' },
  { label: 'Design', color: '#42a5f5' },
  { label: 'Example Workspace', color: '#ab47bc' },
  { label: 'Proposals', color: '#ffa726' },
];

const today = new Date();

const events = [
  {
    title: 'Conference call to discuss design',
    start: new Date(2019, 2, 14, 8, 0),
    end: new Date(2019, 2, 14, 9, 0),
    type: 'analysis',
    calendar: 'Project Workspace',
  },
  {
    title: 'Client review',
    start: new Date(2019, 2, 22, 9, 0),
    end: new Date(2019, 2, 24, 17, 0),
    type: 'review',
    calendar: 'Proposals',
  },
  {
    title: 'Review of the project progression and performance',
    start: new Date(2019, 2, 25, 10, 0),
    end: new Date(2019, 2, 28, 17, 0),
    type: 'review',
    calendar: 'Proposals',
  },
  {
    title: 'Budget planning',
    start: new Date(2019, 2, 7, 13, 0),
    end: new Date(2019, 2, 7, 15, 0),
    type: 'budget',
    calendar: 'Design',
  },
  {
    title: 'Legal review',
    start: new Date(2019, 2, 18, 10, 0),
    end: new Date(2019, 2, 18, 12, 0),
    type: 'legal',
    calendar: 'Concept',
  },
  {
    title: 'Imagery update',
    start: new Date(2019, 2, 11, 14, 0),
    end: new Date(2019, 2, 11, 16, 0),
    type: 'imagery',
    calendar: 'Example Workspace',
  },
  {
    title: 'Important milestone',
    start: new Date(2019, 2, 20, 9, 0),
    end: new Date(2019, 2, 20, 10, 0),
    type: 'important',
    calendar: 'Project Workspace',
  },
  {
    title: 'Appendices review',
    start: new Date(2019, 2, 15, 11, 0),
    end: new Date(2019, 2, 15, 12, 0),
    type: 'appendices',
    calendar: 'Proposals',
  },
  {
    title: 'Team Standup',
    start: new Date(2019, 2, 4, 9, 30),
    end: new Date(2019, 2, 4, 10, 0),
    type: 'benefits',
    calendar: 'Project Workspace',
  },
  {
    title: 'Charts Review',
    start: new Date(2019, 2, 8, 15, 0),
    end: new Date(2019, 2, 8, 16, 0),
    type: 'charts',
    calendar: 'Design',
  },
  {
    title: 'Growth Planning',
    start: new Date(2019, 2, 12, 11, 0),
    end: new Date(2019, 2, 12, 12, 30),
    type: 'growth',
    calendar: 'Concept',
  },
  {
    title: 'Logo Design',
    start: new Date(2019, 2, 19, 14, 0),
    end: new Date(2019, 2, 19, 15, 30),
    type: 'logos',
    calendar: 'Design',
  },
  {
    title: 'Market Analysis',
    start: new Date(2019, 2, 27, 10, 0),
    end: new Date(2019, 2, 27, 11, 30),
    type: 'market',
    calendar: 'Project Workspace',
  },
  {
    title: 'Finance Sync',
    start: new Date(2019, 2, 6, 16, 0),
    end: new Date(2019, 2, 6, 17, 0),
    type: 'finance',
    calendar: 'Concept',
  },
  {
    title: 'Costings Review',
    start: new Date(2019, 2, 13, 10, 0),
    end: new Date(2019, 2, 13, 11, 0),
    type: 'costings',
    calendar: 'Proposals',
  },
  {
    title: 'Today: Demo Meeting',
    start: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 15, 0),
    end: new Date(today.getFullYear(), today.getMonth(), today.getDate(), 16, 0),
    type: 'today',
    calendar: 'Project Workspace',
  },
];

function eventStyleGetter(event) {
  const typeColor = eventTypes.find(t => t.label === event.type)?.color || THEME_COLOR;
  return {
    style: {
      backgroundColor: typeColor,
      color: '#fff',
      borderRadius: '8px',
      border: 'none',
      display: 'block',
      fontWeight: 500,
      fontSize: 13,
      boxShadow: '0 2px 8px 0 rgba(50,50,93,0.07)',
      padding: '2px 8px',
    },
  };
}

const VIEWS = [Views.MONTH, Views.WEEK, Views.DAY];
const VIEW_LABELS = { month: 'Month', week: 'Week', day: 'Day' };

const CalendarComponent = () => {
  const [filter, setFilter] = useState('');
  const [selectedCalendars, setSelectedCalendars] = useState(calendars.map(c => c.label));
  const [date, setDate] = useState(new Date(2019, 2, 1));
  const [view, setView] = useState(Views.MONTH);

  const handleCalendarChange = (label) => {
    setSelectedCalendars(prev =>
      prev.includes(label)
        ? prev.filter(l => l !== label)
        : [...prev, label]
    );
  };

  const filteredEvents = events.filter(e => selectedCalendars.includes(e.calendar));

  // Header month/year for current date
  const month = date.toLocaleString('default', { month: 'long' });
  const year = date.getFullYear();

  // Navigation handlers
  const handlePrev = () => {
    if (view === Views.MONTH) setDate(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
    else if (view === Views.WEEK) setDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 7));
    else if (view === Views.DAY) setDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() - 1));
  };
  const handleNext = () => {
    if (view === Views.MONTH) setDate(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
    else if (view === Views.WEEK) setDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 7));
    else if (view === Views.DAY) setDate(prev => new Date(prev.getFullYear(), prev.getMonth(), prev.getDate() + 1));
  };
  const handleToday = () => setDate(new Date());

  return (
    <div style={{ display: 'flex', background: '#f4f6fb', borderRadius: 16, boxShadow: '0 4px 24px 0 rgba(80,80,120,0.08)', padding: 0, minHeight: 650 }}>
      {/* Sidebar */}
      <div style={{ width: 260, borderRight: '1px solid #eee', padding: 24, background: '#fff', borderTopLeftRadius: 16, borderBottomLeftRadius: 16, boxShadow: '2px 0 8px 0 rgba(80,80,120,0.04)' }}>
        <div style={{ fontWeight: 700, fontSize: 18, marginBottom: 18, letterSpacing: 0.5, color: THEME_COLOR }}>Project Workspace</div>
        <input
          type="text"
          placeholder="Filter by label..."
          value={filter}
          onChange={e => setFilter(e.target.value)}
          style={{ backgroundColor: '#f9f9f9', width: '100%', marginBottom: 18, padding: 8, borderRadius: 8, border: '1px solid #e0e0e0', fontSize: 14, outline: 'none', boxShadow: '0 1px 2px 0rgb(249, 249, 249)' }}
        />
        <div style={{ maxHeight: 180, overflowY: 'auto', marginBottom: 20 }}>
          {eventTypes.filter(t => t.label.includes(filter)).map(type => (
            <div key={type.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 8, borderRadius: 6, padding: '3px 8px', transition: 'background 0.2s', cursor: 'pointer', background: '#f8f8fa' }}>
              <span style={{ display: 'inline-block', width: 18, height: 18, background: type.color, borderRadius: 4, marginRight: 10, border: '2px solid #fff', boxShadow: '0 1px 2px 0 #e0e0e0' }}></span>
              <span style={{ fontSize: 14, color: '#444' }}>{type.label}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: 14, fontWeight: 600, marginBottom: 10, color: THEME_COLOR }}>Select calendars</div>
        <div style={{ marginBottom: 12 }}>
          {calendars.map(cal => (
            <label key={cal.label} style={{ display: 'flex', alignItems: 'center', marginBottom: 7, cursor: 'pointer', borderRadius: 6, padding: '3px 8px', transition: 'background 0.2s', background: selectedCalendars.includes(cal.label) ? '#f3eafe' : '#f8f8fa', fontWeight: 500 }}>
              <input
                type="checkbox"
                checked={selectedCalendars.includes(cal.label)}
                onChange={() => handleCalendarChange(cal.label)}
                style={{ marginRight: 10, accentColor: cal.color }}
              />
              <span style={{ display: 'inline-block', width: 14, height: 14, background: cal.color, borderRadius: 3, marginRight: 10, border: '2px solid #fff', boxShadow: '0 1px 2px 0 #e0e0e0' }}></span>
              <span style={{ fontSize: 14 }}>{cal.label}</span>
            </label>
          ))}
        </div>
        <button style={{ width: '100%', padding: '10px 0', background: `${THEME_COLOR}`, color: '#fff', border: 'none', borderRadius: 8, fontWeight: 700, fontSize: 15, marginTop: 18, boxShadow: '0 2px 8px 0 rgba(80,80,120,0.08)', cursor: 'pointer', transition: 'background 0.2s' }}>
          + Add Event
        </button>
      </div>
      {/* Calendar */}
      <div style={{ flex: 1, padding: 32, background: '#f4f6fb', borderTopRightRadius: 16, borderBottomRightRadius: 16 }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button onClick={handlePrev} style={{ background: THEME_COLOR, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 600, fontSize: 15, marginRight: 8, cursor: 'pointer', boxShadow: '0 1px 4px 0 #e0e0e0' }}>{'<'}</button>
            <button onClick={handleToday} style={{ background: '#fff', color: THEME_COLOR, border: `1.5px solid ${THEME_COLOR}`, borderRadius: 6, padding: '6px 12px', fontWeight: 600, fontSize: 15, marginRight: 8, cursor: 'pointer', boxShadow: '0 1px 4px 0 #e0e0e0' }}>Today</button>
            <button onClick={handleNext} style={{ background: THEME_COLOR, color: '#fff', border: 'none', borderRadius: 6, padding: '6px 12px', fontWeight: 600, fontSize: 15, marginRight: 8, cursor: 'pointer', boxShadow: '0 1px 4px 0 #e0e0e0' }}>{'>'}</button>
            <span style={{ fontWeight: 700, fontSize: 22, color: THEME_COLOR, letterSpacing: 0.5, marginLeft: 8 }}>{month} {year}</span>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {VIEWS.map(v => (
              <button
                key={v}
                onClick={() => setView(v)}
                style={{
                  background: view === v ? THEME_COLOR : '#fff',
                  color: view === v ? '#fff' : THEME_COLOR,
                  border: `1.5px solid ${THEME_COLOR}`,
                  borderRadius: 6,
                  padding: '6px 16px',
                  fontWeight: 600,
                  fontSize: 15,
                  cursor: 'pointer',
                  boxShadow: '0 1px 4px 0 #e0e0e0',
                  transition: 'background 0.2s, color 0.2s',
                }}
              >
                {VIEW_LABELS[v]}
              </button>
            ))}
          </div>
        </div>
        <div style={{ background: '#fff', borderRadius: 16, boxShadow: '0 2px 12px 0 rgba(80,80,120,0.07)', padding: 18 }}>
          <Calendar
            localizer={localizer}
            events={filteredEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, borderRadius: 12 }}
            views={VIEWS}
            eventPropGetter={eventStyleGetter}
            toolbar={false}
            date={date}
            view={view}
            onNavigate={setDate}
            onView={setView}
          />
        </div>
      </div>
    </div>
  );
};

export default CalendarComponent; 