import { test, expect } from '@playwright/test';
import JiraApi from 'jira-client';

// Jira Connection Setup
const jira = new JiraApi({
  protocol: 'https',
  host: 'maryummehmood650852.atlassian.net', 
  username: 'maryummehmood650852@gmail.com', 
  password: 'ATATT3xFfGF0eEtc2W3492LZM9KIeO9oWv0UHGXTfgR-v5C1xrfF0kRTjS53pQ5oQs4PhCHjNxRB2xK6oio9OSMEbqtSdthn6H5KTZXz4qJ0NmHVXK0lz1SLyxc6joQlCmM61G-dOBHD7x71NKBdrEQehK0yP2vbCe24c6NuIi99Q8Edj3rbQN4=C486A4FD', // 👈 Apna token yahan lagayein
  apiVersion: '2',
  strictSSL: true
});

const PROJECT_KEY = 'SCRUM'; 

test.describe('Playwright Jira Tasks', () => {

  test('Create Bug and User Story automatically', async ({ page }) => {
    
    await page.goto('https://example.com'); 

    // Task 1: Create a Bug Report in Jira
    try {
      console.log('Creating Bug in Jira...');
      const bug = await jira.addNewIssue({
        fields: {
          project: { key: PROJECT_KEY },
          summary: 'Bug Report: Automated Issue Tracking via Playwright',
          description: 'This bug was automatically created by Playwright script execution.',
          issuetype: { name: 'Bug' }
        }
      });
      console.log(`✅ Bug successfully created! Ticket Key: ${bug.key}`);
    } catch (err) {
      console.error('Error creating Bug:', err);
    }

    // Task 2: Create a User Story in Jira
    try {
      console.log('Creating User Story in Jira...');
      const story = await jira.addNewIssue({
        fields: {
          project: { key: PROJECT_KEY },
          summary: 'User Story: Automated Feature Conversion via Playwright',
          description: 'This user story was successfully generated via Playwright automation script.',
          issuetype: { name: 'Story' } 
        }
      });
      console.log(`✅ User Story successfully created! Ticket Key: ${story.key}`);
    } catch (err) {
      console.error('Error creating User Story:', err);
    }

  });
});