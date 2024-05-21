---
title: cc-activationLock-reset

---

# cc-activationLock-reset

* launch into Recovery Mode
	* [For 2018/2019 computers](https://support.apple.com/guide/mac-help/use-macos-recovery-on-an-intel-based-mac-mchl338cf9a8/mac#:~:text=Restart%20your%20Mac.,other%20apps%20in%20macOS%20Recovery.)
	* [For Apple Silicon computers](https://support.apple.com/guide/mac-help/macos-recovery-a-mac-apple-silicon-mchl82829c17/mac)
	* wipe the disk in Disk Utility
		* rename main volume as _system
		* rename secondary volume as _work
	* run Reinstall Ventura/Sonoma/whatever macOS that shows up
* log into [business.apple.com](https://business.apple.com/#/main/users)
	* if you're an Admin, use your own
	* if you're not, log into LL Admin account(in 1Password)
	* if you don't have 1Password access, find a full time staff to help out with this part
		* create a new appleID for that computer, the nameing scheme is: 
		* `UID.type.color(or Identifier)@boklearninglab.appleid.com`
		* the UID is simply the next number in the device order, this is viewable in the Apple Business interface
		* types: air, mbp, mini, imac, pro, studio
	* once this is created, create the Sign-in
		* then, log into [appleid.apple.com](appleid.apple.com) 
		* give it a permanent password -- **this will be the same as the LL Admin password, in 1Password**
* progress through the macOS screens on restart
	* log into your freshly created AppleID
	* don't set up
		* screentime
		* accessibility settings
		* fingerprint security
	* otherwise, confirm your way through everything else
### install homebrew
- go to [brew.sh](brew.sh)
- don't forget to then enter the two lines near the end of the installers logs on newer Macs.  They will look something like this:
    ```
    `echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/YOUR_USER_ACCOUNT_NAME/.zprofile
    eval "$(/opt/homebrew/bin/brew shellenv)"``
    ```
	*	once Homebrew is done, install these: 
- once homebrew is installed
    - `brew install git`
    - `brew install visual-studio-code`
    - `brew install node`
- open Terminal 
	- `mkdir Development`
	- `cd Development`
- log into Synology10
	- `10_01/_macsetup/mk_20231208`
	- copy this entire folder down into your Development folder
### Install all the software in the Software folder of mk_20231208
- don't worry about the folders within it, just run the .dmg files
- next, open Terminal 
	- `cd ~/Development/mk_20231208/scripts`
	- `code .` will open the directory in Visual Studio Code
		- Take a look in 02_mainbrew.sh and customize any apps you need/don't need
		- loop through the rest of the files and make sure they're doing everything you need them to
		- then run: 
			- `./02_mainbrew.sh`
			- `./03_preferences.sh`
			- `./04b_some_fonts.sh`
			- `./06_npm.sh`
			- and possibly `./09_repositories.sh`
### Individual installations
- Spotify
    - open, login (just with email and password, not with google)
    - disable open on login
- Chrome
	- log in to the Studio@learninglab.xyz account
- If prompted to install Rosetta 2, you can either agree to Install it, or run this code: 
`/usr/sbin/softwareupdate --install-rosetta --agree-to-license
- configure printer
	- open Printers and Scanners
		- choose IP
		- enter `140.247.73.53`
		- configure
			- Tray 3
			- change all "not installed" to "installed" that you can
### These will differ, depending on the computer group
#### for reality machines
- Maxon One
	- https://www.maxon.net/en/downloads
	- Download Cinema4D
	- Zbrush
	- Redshift
- Open Epic Game Store and install Unreal Engine
- Open Unity Hub and download a the most recent version of Unity
	- also, download all the Unity templates
- open Adobe Creative Cloud Desktop App
	- install: 
		- Premiere
		- After Effects 
		- Media Encoder
		- Illustrator
		- Photoshop
		- Character Animator
		- Lightroom Classic 
		- Audition
#### for client-facing machines
- open Adobe Creative Cloud Desktop App
	- install: 
		- Premiere
		- After Effects 
		- Media Encoder
		- Illustrator
		- Photoshop
		- Character Animator
		- Lightroom Classic 
		- Audition
### Only once we have the App Store set up(it's not set up yet)
- Open Logic Pro and start downloading the sounds library
- Open Garageband and start downloading the sounds library 
- open BetterSnapTool and give it permission, then set to open on startup
- open Slack, log in
## Groups
- server machines
	- machines
		- basic-level mac minis
	- apps
		- homebrew installs
		- app store installs
		- Blackmagics
- production machines
	- machines
		- mac studios
		- mac pro
		- high end laptops
	- apps
		- app store installs
		- homebrew installs
		- Blackmagic stuff
		- Adobe 
		- Maxon
		- Unreal
		- Blender
		- Unity
- client-facing machines
	- machines
		- imacs
	- apps
		- app store installs
		- homebrew installs
		- Blackmagic stuff
		- Adobe 
