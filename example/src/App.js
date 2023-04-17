import React, { useState } from "react";

import {
  UiProvidor,
  Accordion,
  AppBar,
  AppHeader,
  AutoComplete,
  Avatar,
  BottomNavigation,
  BottomNavItem,
  Breadcrumb,
  Button,
  Checkbox,
  Chip,
  Column,
  DatePicker,
  Dialog,
  FloatingButton,
  Link,
  MenuDropdown,
  MenuItem,
  //
  Text
} from "elysium-cloud-ui";
import "elysium-cloud-ui/dist/index.css";

const App = () => {
  const [fruitName, setFruitName] = useState("apple");
  const [checkboxFlag1, toggleCheckbox1] = useState(false);
  const [checkboxFlag2, toggleCheckbox2] = useState(false);
  const [checkboxFlag3, toggleCheckbox3] = useState(false);
  const [dateValue, setDateValue] = useState(new Date());
  const [showDialog, toggleDialog] = useState(false);
  return (
    <div className='showcase-container'>
      <UiProvidor>
        <section className='showcase-item'>
          <Accordion
            title={<div className='accordion-heading'>Accordion Component</div>}
            openIcon={<i className='fas fa-chevron-down' />}
            collapseIcon={<i className='fas fa-chevron-up' />}
            className='demo-card-accordion'
            defaultOpen={false}
            id='accordion1'
          >
            <section className='content-wrapper'>Accordion Text Area</section>
          </Accordion>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppHeader
            className='app-header'
            companyIcon={true}
            secondaryIcon={null}
            onIconClick={() => {
              alert("Header Icon Clicked");
            }}
            profileIcon={
              <Avatar size='M'>
                <i className='fas fa-user-circle'></i>
              </Avatar>
            }
          >
            <h1>APP HEADER</h1>
          </AppHeader>
        </section>
        <section className='showcase-item'>
          <AutoComplete
            dataSet={[
              { id: 1, name: "apple" },
              { id: 2, name: "orange" },
              { id: 3, name: "banana" },
              { id: 4, name: "pine apple" },
              { id: 5, name: "custard apple" },
              { id: 6, name: "watermelon" }
            ]}
            onChange={(value) => setFruitName(value.name)}
            value={fruitName}
            placeholder='Start typing here...'
            label='Enter fruit name'
            id='AutoComplete'
            className='AutoComplete'
            renderItem={(_item) => (
              <div className='autocomplete-row'>{_item.name}</div>
            )}
            dataSetType='nested' // flat / nested
            dataTargetKey='name'
          />
        </section>
        <section className='showcase-item'>
          <div className='flex-row'>
            <Avatar size='S' className='test'>
              <i className='fas fa-user-circle' />
            </Avatar>
            <Avatar size='S'>JD</Avatar>
            <Avatar size='M'>JD</Avatar>
            <Avatar size='L'>JD</Avatar>
            <Avatar size='XL'>JD</Avatar>
            <Avatar size='XXL'>JD</Avatar>
            <Avatar size='3XL'>JD</Avatar>
          </div>
        </section>
        <section className='showcase-item'>
          <BottomNavigation className='bottom-nav-demo'>
            <BottomNavItem
              active={true}
              icon={<i className='fas fa-user' />}
              onClick={() => alert("TESTING")}
            >
              Profile
            </BottomNavItem>
            <BottomNavItem icon={<i className='fas fa-shield-virus' />}>
              Privacy
            </BottomNavItem>
            <BottomNavItem type='center' icon={<i className='fas fa-plus' />}>
              Settings
            </BottomNavItem>
            <BottomNavItem icon={<i className='fas fa-hamburger' />}>
              Food
            </BottomNavItem>
            <BottomNavItem icon={<i className='fas fa-truck' />}>
              Truck
            </BottomNavItem>
          </BottomNavigation>
        </section>
        <section className='showcase-item'>
          <Breadcrumb
            crumbs={[
              {
                label: "crumb 1",
                onClick: () => {
                  console.log("crumb1");
                }
              }
            ]}
          />
          <Breadcrumb
            crumbs={[
              {
                label: "crumb 1",
                onClick: () => {
                  console.log("crumb1");
                }
              },
              {
                label: "crumb 2",
                onClick: () => {
                  console.log("crumb2");
                }
              },
              {
                label: "crumb 3",
                onClick: () => {
                  console.log("crumb3");
                }
              },
              {
                label: "crumb 4",
                onClick: () => {
                  console.log("crumb4");
                }
              },
              {
                label: "crumb 5",
                onClick: () => {
                  console.log("crumb5");
                }
              }
            ]}
          />
        </section>
        <section className='showcase-item'>
          <div className='flex-row'>
            <Button
              curve='curved'
              id='button-1'
              onClick={() => {
                console.log("button-1");
              }}
              buttonsize='S'
              className='test'
            >
              Primary button
            </Button>
            <Button
              type='primary'
              id='button-2'
              onClick={() => {
                console.log("button-2");
              }}
              curve='rounded'
              disabled={false}
              buttonsize='M'
              icon={<i className='fas fa-plus' />}
            >
              Primary button
            </Button>
            <Button
              type='primary'
              id='button-2'
              onClick={() => {
                console.log("button-2");
              }}
              curve='rounded'
              disabled={true}
              buttonsize='M'
            >
              Primary button [Disabled]
            </Button>
            <Button
              type='secondary'
              id='button-3'
              onClick={() => {
                console.log("button-3");
              }}
              curve='curved'
              buttonsize='L'
              icon={<i className='fas fa-calendar-alt' />}
            >
              Secondary button
            </Button>
            <Button
              type='text'
              id='button-4'
              onClick={() => {
                console.log("button-4");
              }}
              curve='flat'
              buttonsize='L'
              icon={<i className='fas fa-calendar-alt' />}
              alignicon='left'
            >
              Text button
            </Button>
            <Button
              type='text'
              id='button-4'
              onClick={() => {
                console.log("button-4");
              }}
              curve='flat'
              buttonsize='L'
              icon={<i className='fas fa-calendar-alt' />}
              alignicon='right'
            >
              Text button
            </Button>
          </div>
        </section>
        <section className='showcase-item'>
          <div className='flex-row'>
            <Checkbox
              name='options'
              onChange={(value) => toggleCheckbox1(value)}
              checked={checkboxFlag1}
              label='IceCream'
            ></Checkbox>
            <Checkbox
              name='options'
              onChange={(value) => toggleCheckbox2(value)}
              checked={checkboxFlag2}
              label='Falooda'
            ></Checkbox>
            <Checkbox
              name='options'
              onChange={(value) => toggleCheckbox3(value)}
              checked={checkboxFlag3}
              label='Milkshake'
              disabled={true}
            ></Checkbox>
          </div>
        </section>
        <section className='showcase-item'>
          <Chip
            onClose={() => console.log("HANDLE CHIP CLOSE")}
            icon={<i className='fas fa-thumbs-up' />}
            dismissable={true}
            color='white'
          >
            Label
          </Chip>
          <Chip
            onClose={() => console.log("HANDLE CHIP CLOSE")}
            icon={<i className='fas fa-thumbs-up' />}
            dismissable={true}
            color='red'
          >
            Label
          </Chip>
        </section>
        <section className='showcase-item'>
          <Column md={3} className='sub-col'>
            Column 1
          </Column>
          <Column id='test' md={3}>
            Column 2
          </Column>
          <Column md={3}>Column 3</Column>
          <Column md={3}>Column 4</Column>
          <Column sm={6}>Column 5</Column>
          <Column lg={6}>Column 6</Column>
        </section>
        <section className='showcase-item'>
          <DatePicker
            type='text'
            value={dateValue}
            onChange={(val) => setDateValue(val)}
            className='date-field'
            label='Date of birth'
            minDate={new Date("03-22-2021")}
            maxDate={new Date("12-31-2022")}
            iconRight={<i className='fas fa-calendar-alt' />}
          />
        </section>
        <section className='showcase-item'>
          <button
            className='modal-anchor-btn'
            onClick={() => toggleDialog(!showDialog)}
          >
            Click me
          </button>
          {showDialog && (
            <Dialog
              id='demoModal'
              open={showDialog}
              hide={() => toggleDialog(!showDialog)}
              header={true}
            >
              <div className='dialog-title'>
                <Text type='h5'>Dialog Title</Text>
              </div>
              <div className='dialog-content'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate
              </div>
              <div className='dialog-footer'>
                <button
                  onClick={() => toggleDialog(!showDialog)}
                  className='dismiss-dialog'
                >
                  Dismiss
                </button>
              </div>
            </Dialog>
          )}
        </section>
        <section className='showcase-item'>
          <FloatingButton
            icon={<i className='fas fa-plus' />}
            onClick={() => console.log("button 1 clicked")}
            color='red'
            size='small'
          />
          <FloatingButton
            icon={<i className='fas fa-times' />}
            onClick={() => console.log("button 2 clicked")}
            color='white'
            size='medium'
          >
            Close
          </FloatingButton>
          <FloatingButton
            // icon={<i className='fas fa-times' />}
            onClick={() => console.log("button 3 clicked")}
            color='red'
            size='small'
          >
            Test floating button
          </FloatingButton>
        </section>
        <section className='showcase-item'>
          <Text type='h1'>heading 1 --{`>`} TITLE </Text>
          <Text type='h2'>heading 2 --{`>`} TITLE </Text>
          <Text type='h3'>heading 3 --{`>`} TITLE</Text>
          <Text type='h4'>heading 4 --{`>`} TITLE</Text>
          <Text type='h5'>heading 5 --{`>`} TITLE</Text>
          <Text type='h6'>heading 6 --{`>`} TITLE</Text>
          <Text type='sh'>sub heading --{`>`} TITLE</Text>
          <Text type='sb-h1'>semibold-heading 1 --{`>`} TITLE</Text>
          <Text type='sb-h2'>semibold-heading 2 --{`>`} TITLE</Text>
          <Text type='h7'>hheading 7 --{`>`} TITLE</Text>
          <Text type='h8'>hheading 8 --{`>`} TITLE</Text>
          <Text type='b1'>body 1 --{`>`} TITLE</Text>
          <Text type='b2'>body 2 --{`>`} TITLE</Text>
          <Text type='b3'>body 3 --{`>`} TITLE</Text>
          <Text type='subtitle'>subtitle --{`>`} TITLE</Text>
          <Text type='caption'>caption --{`>`} TITLE</Text>
          <Text type='info'>info --{`>`} TITLE</Text>
        </section>
        <section className='showcase-item'>
          <Link
            target='_blank'
            style={{ background: "yellow" }}
            size='S'
            href='/'
          >
            Clickable Link[small]
          </Link>
          <Link target='_blank' size='M' href='/'>
            Clickable Link[medium]
          </Link>
          <Link target='_blank' size='L' href='/'>
            Clickable Link[large]
          </Link>
          <Link target='_blank' href='/' disabled={true}>
            Clickable Link [disabled]
          </Link>
        </section>
        <section className='showcase-item'>
          <MenuDropdown
            label={
              <span>
                <i className='fas fa-list' /> Simple Menu
              </span>
            }
            alignMenu='left'
          >
            <MenuItem onClick={() => console.log("HELLO WORLD")}>Home</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
            <option>Missing items</option>
          </MenuDropdown>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
        <section className='showcase-item'>
          <AppBar></AppBar>
        </section>
      </UiProvidor>
    </div>
  );
};

export default App;
