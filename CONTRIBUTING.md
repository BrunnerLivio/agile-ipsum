# Contributing

Thank you for your interest in contributing to the Agile Ipsum!

The following describes how to contribute to the Agile Ipsum repository.

## Reporting Issues

If you have found a bug, spelling mistake, or anything related to an example that you feel could be improved, please create a new issue here on GitHub.

An issue can be raised by clicking the 'Issues' tab at the top of the repository, followed by the Green 'New issue' button. When submitting an issue, please thoroughly and concisely describe the problem you are experiencing, or improvement you feel could be made, so that we may easily understand and resolve the issue in a timely manner.

## Contributing Content

We highly welcome contributions on this repository. To extend the vocabulary of the generator,
you can add new words in the [words.txt](https://github.com/BrunnerLivio/agile-ipsum/blob/master/words.txt) file. 

When contributing a new word, we kindly ask that you follow the steps below:

- Add your new agile word(s) into the [words.txt](https://github.com/BrunnerLivio/agile-ipsum/blob/master/words.txt) file. Each new line will be read as a seperate word and can be placed in any order by the generator.
- Check before-hand whether your new added word is not a duplicate.

When contributing a new word, please fork this repository and then add your example before submitting a pull request. If you are not sure how to do this then please take a look at the [Forking Workflow](#forking-workflow) below.


## Forking Workflow

To contribute to this repository, you will need to fork it, make changes and submit a pull request. This section is a brief guide on how to do this whilst making sure your forked repository stays up to date the with the official one.

The first step is to fork the repository, creating a copy of it under your own account. To do this, click the 'fork' button at the top right of the page.

A few seconds later you should be redirected. Now, if you look at the top left of the page it should show your GitHub username before the repository, confirming the fork has been successful.

Next you need to clone your fork your local environment so you can make changes to it. To do this you can click the Green 'Clone or download' button which will give you a URL to copy. Once copied, enter `git clone` in your terminal followed by the URL and hit enter, the command should look like this:

`git clone git@github.com:<your username here>/agile-ipsum.git`

If successful, you should see the forked repository being cloned to your local environment.

To add the remote path for the official git repository, enter the following:

`git remote add upstream git@github.com:zeit/docs.git`

This command adds a new remote branch, with the name 'upstream'. If you ever want to pull the recent changes to update your local fork you can use the following command:

`git pull upstream master`

So far you've managed to fork, clone, install dependencies and add a remote, not bad going! Now you want to start making our changes, to do this you should create a new branch. Creating a branch for each change you make will keep things simpler for everyone and allow you to work on multiple changes at once if you like.

You can create a branch by using:

`git checkout -b <your branch name>`

Remember to use a descriptive and meaningful name when creating your branch, this will help you remember what its purpose is!

Now you're working on a branch you are a free to make the changes needed, further help with this can be found [below](#platform-and-usage-documentation). After you've finished making changes, commit them and push them to your new branch, you will need to create a new upstream remote to do this.

To create a new upstream remote, enter:

`git push --set-upstream origin <your branch name>`

Your new branch should now appear on your remote repository. It can be viewed by visiting your remote repository and clicking 'Branches'. On this page you will see multiple sections, the most important one being 'Your branches'.

To the right of the branch you will see a button that says 'New pull request', click this to begin the process of submitting your changes for review. You will now be prompted to enter a relevant title and a description of the changes made. When entering this information try to be concise but make sure to include the following information:

- What changes you've made
- Your reason for making them
- A request for feedback if required (add [WIP] to your title)

Congratulations, you've just made your first pull request to the Agile Ipsum repository!

The rest of this section relates to other scenarios you may encounter whilst contributing and may not be applicable just yet, so feel free to [read ahead](#platform-and-usage-documentation). If you want to know what you should do in the event changes are requested to your pull request, or your master branch becomes out of sync with the official repository, read on below:

### Master Branch out of Sync

This is very common and happens when changes are made to the official repository, meaning your fork is suddenly out of date. The only time you need to consider this is before you create a new branch, this means that whenever you start working on changes, your branch will always be up to date as of that moment.

When pulling changes from the official repository, it is always a good idea to do so from your master branch. Providing you've followed the advice above about adding a remote upstream, your command should look like this:

`git pull upstream master`

This will get the most recent changes and bring your local fork up to date, at this point it is a good idea to have your remote fork reflect this, all this requires is to use:

`git push`

Now, both your local and remote fork are up to date with the official repository, you are ready to create branches and make changes!

### Pull Request Changes Requested

When you submit a pull request, a reviewer may request that you make further changes before merging with the master branch. This situation might seem difficult at first but is extremely straightforward.

All you need to do is make the changes on the same branch locally, commit and push them. Because you already have a pull request set up to track that branch, GitHub will automatically update it with your most recent changes. At this point it's a good idea to tag the original reviewer in the pull request using `@<reviewers username>`, to let them know you've made the requested changes.
