---
title: Cloning a GitHub Repository and Editing in Visual Studio Code
tags: [codeLab]

---

# Cloning a GitHub Repository and Editing in Visual Studio Code

This guide will walk you through the process of cloning a GitHub repository and editing its contents using Visual Studio Code (VS Code). Cloning a repository allows you to create a local copy of the repository on your computer, which you can edit and then push your changes back to GitHub.

## Prerequisites
You should have a GitHub account. If you don't have one, you can sign up at GitHub.

You should have Visual Studio Code installed on your computer. [This resource](https://hackmd.io/tDt-lhlZSninMyKj8S3xUA) will help you get it on your machine.

## Step 1: Clone the GitHub Repository
Open your web browser and go to the GitHub repository you want to clone.

Click on the "Code" button on the repository's main page.

Copy the URL of the repository from the dropdown.

Open a terminal (command prompt on Windows, terminal on macOS and Linux) on your computer.

Navigate to the directory where you want to clone the repository using the cd command. For example:

```
cd Documents
```
Use the git clone command followed by the copied URL to clone the repository. For example:

```
git clone https://github.com/username/repository-name.git
```
The repository will be cloned into a new directory with the same name as the repository. Navigate into the cloned directory using the cd command.

## Step 2: Editing in Visual Studio Code
Open Visual Studio Code.

Click on "File" in the top left corner and select "Open Folder."

Navigate to the cloned repository directory and select it.

Visual Studio Code will now open the repository's contents. You can see all the files and folders in the Explorer panel on the left.

To edit a file, simply click on it in the Explorer panel. The file will open in the main editor area.

Make your changes to the file.

After making changes, save the file by clicking "File" in the top left corner and selecting "Save" or by using the keyboard shortcut Ctrl + S (Windows/Linux) or Cmd + S (macOS).

## Step 3: Pushing Changes to GitHub
Open the terminal in Visual Studio Code by clicking "View" in the top menu and selecting "Terminal," or by using the keyboard shortcut Ctrl + backtick (`).

Use the following commands to commit and push your changes to GitHub:

```
git add .
git commit -m "Add a descriptive commit message here"
git push origin main
```
Replace "Add a descriptive commit message here" with a meaningful message describing your changes.

Your changes will now be pushed to GitHub.

## Using .gitignore to Protect API Keys and Sensitive Information
### Why Use .gitignore?
When you're developing an application, you might work with sensitive information like API keys, passwords, and other configuration details. Committing such information to version control systems like Github can pose security risks, as it exposes this data to potential attackers. The .gitignore file helps prevent these sensitive files from being accidentally included in your Git repository, enhancing security and privacy.

### Creating .gitignore Files
Visual Studio Code simplifies the process of creating and managing .gitignore files for your projects.

Open Your Project in Visual Studio Code: Launch Visual Studio Code and open the root directory of your project.

### Creating a .gitignore File:

In the Explorer panel on the left, right-click on your project folder and select "New File." Name the file .gitignore (note the leading dot) and press Enter.

### Adding Entries to .gitignore:
Open the newly created .gitignore file.
Add entries for files and directories you want to exclude from version control. For example, to exclude a file named config.json and all .env files, you would add:
```
config.json
.env
```
Each line represents a file or directory pattern to be ignored.
Save the .gitignore file

### Commit and Push Changes: 
After saving the .gitignore file, commit and push your changes to ensure that the .gitignore settings are applied across your repository.

### Including .env.local Files in .gitignore
.env.local files are often used to store environment-specific configuration. Including them in .gitignore ensures that local configuration remains private.

### Modify Your .gitignore File:

Open your existing .gitignore file.
Add an entry to ignore .env.local files:

```.env.local```

Save the .gitignore file.
### Save and Commit Changes: 
Save your .gitignore file and commit your changes to ensure that .env.local files are excluded from version control.


By using .gitignore, you safeguard sensitive information like API keys, passwords, and local configurations from being exposed in your Git repository. This security practice helps protect your application and its users' data. Utilizing Visual Studio Code's built-in features makes it easy to create and manage .gitignore files, contributing to a more secure development process.

Remember to regularly update your .gitignore file as your project evolves and new sensitive files are added. By following these steps, you can ensure your application remains secure and your sensitive information remains private.