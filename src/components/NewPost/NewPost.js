import React, {useCallback, useEffect, useState} from "react";
import {Button, DatePicker, DisplayText, Form, FormLayout, Icon, Popover, Select, TextContainer, TextField} from '@shopify/polaris';
import { CalendarMajor } from '@shopify/polaris-icons';

const NewPost = () => {
  const [state, setState] = useState({
    title: "",
    content: "",
    selectedDate: new Date('Dec 25 2020 00:00:00 GMT-0500 (EST)'),
    author: "",
    category: "",
    tag1: "",
    tag2: "",
    tag3: ""
  });

  const [calendarView, setCalendarView] = useState({ month: 11, year: 2020 })

  const handleChange = (e, elementName) => {
    setState({
      ...state,
      [elementName]: e
    })
  }

  const handleCalendarChange = (e) => {
    console.log('in handleCalendarChange', e)
    setState({
      ...state,
      selectedDate: e.start
    })
  }

  const handleMonthChange = useCallback((month, year) => {
    console.log(`in handleMonthChange: month: ${month}, year: ${year}`)
    setCalendarView({month, year})
  }, []);

  const handleSubmit = useCallback((_event) => {

  }, []);

  const [popoverActive, setPopoverActive] = useState(false);

  /* Opening and closing popovers have been separated, since clicking on the Date TextField element
    runs `openPopover` twice. One function that toggles the state won't work. 
    TO-DO: figure out why */
  const openPopover = useCallback(
    () => setPopoverActive(true), []
  );

  const closePopover = useCallback(
    () => setPopoverActive(false), []
  );

  /* placeholder for author options */
  const authorOptions = [
    {label: 'Example User', value: 'Example User'},
    {label: 'John Smith', value: 'John Smith'},
    {label: 'Jane Doe', value: 'Jane Doe'},
  ];

  /* placeholder for category options */
  const categoryOptions = [
    {label: 'Software engineering', value: 'Software engineering'},
    {label: 'Tips & Tricks', value: 'Tips & Tricks'},
    {label: 'Thoughts', value: 'Thoughts'},
  ];

  useEffect(() => {
    console.log('useEffect, state:', state);
  }, [state])

  const activator = (
    <TextField type="text" 
              label="Date" 
              placeholder="Select a date..." 
              prefix={<Icon source={CalendarMajor} color="black"></Icon>}
              value={state.selectedDate.toLocaleDateString()}
              onFocus={openPopover}
    />
  );

  return (
    <div style={{margin: '0 auto'}}>
      <TextContainer>
        <br />
        <DisplayText size="large">Create a new post</DisplayText>
        <br />

        <Form onSubmit={handleSubmit}>
        <FormLayout>
            <TextField label="Title" value={state.title} onChange={e => handleChange(e, "title")} />
            <TextField label="Content" multiline={6} value={state.content} onChange={e => handleChange(e, "content")} />
            
            <Popover 
              active={popoverActive}
              activator={activator}
              onClose={closePopover}
            >
              <DatePicker 
                month={calendarView.month} 
                year={calendarView.year} 
                selected={state.selectedDate}
                onChange={handleCalendarChange}
                onMonthChange={handleMonthChange}
              />
            </Popover>

            <Select label="Author" options={authorOptions} onChange={e => handleChange(e, "author")} value={state.author} />
            <Select label="Category" options={categoryOptions} onChange={e => handleChange(e, "category")} value={state.category} />

            <TextField label="Tag 1" value={state.tag1} onChange={e => handleChange(e, "tag1")} />
            <TextField label="Tag 2" value={state.tag2} onChange={e => handleChange(e, "tag2")} />
            <TextField label="Tag 3" value={state.tag3} onChange={e => handleChange(e, "tag3")} />

            <Button submit>Submit</Button>
        </FormLayout>
      </Form>
      </TextContainer>
    </div>
  )
};

export default NewPost;
