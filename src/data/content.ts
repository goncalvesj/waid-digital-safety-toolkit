export const decisionTrees = {
  emailCompromise: {
    id: "email-compromise",
    title: "Email Account Security",
    description: "Help with potentially compromised email accounts",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What makes you think your email might be compromised?",
        options: [
          {
            text: "I'm getting password reset emails I didn't request",
            next: "password-resets"
          },
          {
            text: "Friends say they're getting spam from my email",
            next: "spam-sent"
          },
          {
            text: "I can't log into my email account",
            next: "cannot-login"
          },
          {
            text: "I see emails in my sent folder I didn't send",
            next: "unauthorized-emails"
          },
          {
            text: "Someone knows things they shouldn't from my emails",
            next: "privacy-breach"
          }
        ]
      },
      "password-resets": {
        question: "Are you able to log into your email account normally?",
        options: [
          {
            text: "Yes, I can still log in",
            next: "can-login-resets"
          },
          {
            text: "No, I cannot log in",
            next: "cannot-login"
          }
        ]
      },
      "can-login-resets": {
        guidance: {
          title: "Suspicious Password Reset Attempts",
          content: "Someone may be trying to access your accounts. This is concerning but you still have control.",
          immediateActions: [
            "Do NOT click any links in these emails",
            "Check your email's login activity/security logs",
            "Enable two-factor authentication immediately",
            "Change your email password right now"
          ],
          nextSteps: "Follow our Account Security Checklist to secure all your accounts."
        }
      },
      "spam-sent": {
        guidance: {
          title: "Spam Being Sent From Your Account",
          content: "Your email account has likely been compromised. Others can see this activity.",
          immediateActions: [
            "Change your password immediately",
            "Check sent folder for emails you didn't send",
            "Enable two-factor authentication",
            "Review and revoke suspicious app permissions",
            "Inform contacts that your account was compromised"
          ],
          nextSteps: "Use our Email Recovery Checklist to fully secure your account."
        }
      },
      "cannot-login": {
        question: "What happens when you try to log in?",
        options: [
          {
            text: "It says my password is wrong",
            next: "wrong-password"
          },
          {
            text: "It says my account doesn't exist",
            next: "account-missing"
          },
          {
            text: "It asks for verification I can't provide",
            next: "verification-issue"
          }
        ]
      },
      "wrong-password": {
        guidance: {
          title: "Password Changed Without Your Knowledge",
          content: "Someone else has changed your password. This is a serious security breach.",
          immediateActions: [
            "Use 'Forgot Password' to reset via phone/backup email",
            "If backup methods don't work, contact email provider immediately",
            "Do NOT use this email for anything important until recovered",
            "Alert trusted contacts that your email is compromised"
          ],
          nextSteps: "Follow our Account Recovery process and then complete the Email Security Checklist."
        }
      },
      "unauthorized-emails": {
        guidance: {
          title: "Unauthorized Emails Sent",
          content: "Your account is actively being used by someone else. Act quickly.",
          immediateActions: [
            "Change password immediately",
            "Sign out of all devices in email settings",
            "Enable two-factor authentication",
            "Check if recovery email/phone was changed",
            "Review all recent account activity"
          ],
          nextSteps: "Complete our comprehensive Email Security Checklist to prevent future breaches."
        }
      },
      "account-missing": {
        guidance: {
          title: "Account Appears Deleted",
          content: "This could be account deletion or a serious compromise. Immediate action needed.",
          immediateActions: [
            "Contact email provider's support immediately",
            "Check if you're using the correct email address",
            "Look for account deletion confirmation emails",
            "Secure all other accounts that used this email"
          ],
          nextSteps: "While recovering, use our New Account Security Setup guide for any replacement accounts."
        }
      },
      "verification-issue": {
        guidance: {
          title: "Recovery Methods Changed",
          content: "Someone may have changed your security settings. This suggests sophisticated access.",
          immediateActions: [
            "Contact email provider support with ID verification",
            "Try all possible backup recovery methods",
            "Check for confirmation emails about security changes",
            "Secure all accounts linked to this email immediately"
          ],
          nextSteps: "Follow our Account Recovery Guide and strengthen security on all accounts."
        }
      }
    }
  },
  deviceSafety: {
    id: "device-safety",
    title: "Device & Spyware Concerns",
    description: "Check if your device might be monitored",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What makes you concerned about your device?",
        options: [
          {
            text: "Battery drains much faster than normal",
            next: "battery-drain"
          },
          {
            text: "Someone seems to know my location/activities",
            next: "location-tracking"
          },
          {
            text: "Device feels slow or behaves strangely",
            next: "performance-issues"
          },
          {
            text: "I found apps I didn't install",
            next: "unknown-apps"
          }
        ]
      },
      "battery-drain": {
        question: "Have you noticed any other unusual behavior?",
        options: [
          {
            text: "Device gets hot even when not in use",
            next: "heat-and-battery"
          },
          {
            text: "Data usage is higher than normal",
            next: "data-usage"
          },
          {
            text: "Just the battery issue",
            next: "battery-only"
          }
        ]
      },
      "heat-and-battery": {
        guidance: {
          title: "Potential Spyware Activity",
          content: "Unusual heat and battery drain together can indicate hidden software running constantly.",
          immediateActions: [
            "Check running apps and background activity",
            "Look for unfamiliar apps in your app list",
            "Review recent app installations",
            "Check data usage by app",
            "Consider professional device scan"
          ],
          nextSteps: "Use our Device Security Checklist to thoroughly check your device."
        }
      },
      "location-tracking": {
        question: "How do you think someone knows your location?",
        options: [
          {
            text: "They mention specific places I've been",
            next: "specific-locations"
          },
          {
            text: "They seem to know when I leave/arrive somewhere",
            next: "timing-knowledge"
          },
          {
            text: "They know about private activities/conversations",
            next: "private-knowledge"
          }
        ]
      },
      "specific-locations": {
        guidance: {
          title: "Detailed Location Tracking",
          content: "Someone may have access to your location data through your device or accounts.",
          immediateActions: [
            "Turn off location sharing in all apps",
            "Check location history in Google/Apple accounts",
            "Review who has access to your location",
            "Check for tracking apps on your device",
            "Change passwords on all location-related accounts"
          ],
          nextSteps: "Follow our Location Privacy Checklist to secure your movements."
        }
      },
      "unknown-apps": {
        guidance: {
          title: "Suspicious Apps Found",
          content: "Unknown apps could be spyware or monitoring software installed without your knowledge.",
          immediateActions: [
            "Do NOT open or use these unknown apps",
            "Take screenshots of the apps before removing",
            "Uninstall suspicious apps immediately",
            "Change all account passwords",
            "Run device security scan",
            "Consider factory reset if feeling unsafe"
          ],
          nextSteps: "Complete our Anti-Spyware Checklist and consider professional help."
        }
      },
      "performance-issues": {
        guidance: {
          title: "Device Performance Problems",
          content: "Slow performance can indicate malware, spyware, or other security issues.",
          immediateActions: [
            "Check running apps and close unnecessary ones",
            "Review recently installed apps",
            "Clear device storage and cache",
            "Run built-in security scan",
            "Monitor which apps use most resources"
          ],
          nextSteps: "Use our Device Performance & Security Checklist to investigate further."
        }
      },
      "data-usage": {
        guidance: {
          title: "Unusual Data Activity",
          content: "High data usage combined with battery drain suggests apps sending data without your knowledge.",
          immediateActions: [
            "Check data usage by individual apps",
            "Look for apps using data in background",
            "Turn off background app refresh for suspicious apps",
            "Review app permissions",
            "Consider temporary airplane mode when safe"
          ],
          nextSteps: "Follow our Data Privacy Checklist to control what information leaves your device."
        }
      },
      "battery-only": {
        guidance: {
          title: "Battery Drain Investigation",
          content: "Battery issues alone might be hardware-related, but worth checking for security issues.",
          immediateActions: [
            "Check battery usage by app",
            "Look for apps using power in background",
            "Update all apps and operating system",
            "Restart device and monitor improvement"
          ],
          nextSteps: "If battery issues persist, use our Basic Device Security Checklist as precaution."
        }
      },
      "timing-knowledge": {
        guidance: {
          title: "Movement Pattern Tracking",
          content: "Someone tracking your schedule suggests access to calendar, location, or communication data.",
          immediateActions: [
            "Review calendar privacy settings",
            "Check who has access to shared calendars",
            "Turn off location history and sharing",
            "Review social media check-ins and posts",
            "Change passwords on calendar and social accounts"
          ],
          nextSteps: "Complete our Schedule Privacy Checklist to protect your routine information."
        }
      },
      "private-knowledge": {
        guidance: {
          title: "Private Information Exposure",
          content: "Knowledge of private activities suggests serious privacy breach - device access, account compromise, or surveillance.",
          immediateActions: [
            "Change ALL account passwords immediately",
            "Enable two-factor authentication everywhere",
            "Check for unknown devices logged into accounts",
            "Review app permissions for microphone/camera access",
            "Consider professional digital security consultation"
          ],
          nextSteps: "This is serious - follow our Complete Privacy Audit Checklist and consider seeking professional help."
        }
      }
    }
  },
  safetyAssessment: {
    id: "safety-assessment",
    title: "Digital Safety Assessment",
    description: "Get personalized guidance for your current situation",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What best describes your current digital safety concern?",
        options: [
          {
            text: "Someone is monitoring or controlling my digital activities",
            next: "monitoring-control"
          },
          {
            text: "My accounts or devices may have been compromised",
            next: "potential-compromise"
          },
          {
            text: "I'm experiencing online harassment or threats",
            next: "harassment-threats"
          },
          {
            text: "Private images/videos of me have been shared without consent",
            next: "image-abuse"
          },
          {
            text: "I want to protect my privacy and stay safe online",
            next: "prevention-privacy"
          },
          {
            text: "I'm supporting someone who is experiencing digital abuse",
            next: "supporting-others"
          }
        ]
      },
      "monitoring-control": {
        question: "Who do you think is monitoring or controlling your digital activities?",
        options: [
          {
            text: "Current or former intimate partner",
            next: "partner-monitoring"
          },
          {
            text: "Family member or someone I live with",
            next: "family-monitoring"
          },
          {
            text: "Someone I know (friend, colleague, etc.)",
            next: "known-person-monitoring"
          },
          {
            text: "Unknown person or stranger",
            next: "unknown-monitoring"
          },
          {
            text: "I'm not sure who, but I suspect monitoring",
            next: "suspected-monitoring"
          }
        ]
      },
      "partner-monitoring": {
        question: "What type of monitoring or control are you experiencing from your partner?",
        options: [
          {
            text: "They demand passwords to my accounts",
            next: "password-demands"
          },
          {
            text: "They check my phone, computer, or browsing history",
            next: "device-checking"
          },
          {
            text: "They seem to know where I go or who I talk to",
            next: "location-communication-tracking"
          },
          {
            text: "They control my access to technology or internet",
            next: "tech-access-control"
          },
          {
            text: "Multiple forms of digital control",
            next: "multiple-control"
          }
        ]
      },
      "password-demands": {
        guidance: {
          title: "Password Demands and Digital Control",
          content: "Demanding passwords is a form of digital abuse and violates your privacy rights. You have the right to digital privacy even in relationships.",
          immediateActions: [
            "Know that demanding passwords is not normal or acceptable in healthy relationships",
            "If safe to do so, change passwords when they're not around",
            "Use private browsing mode when possible",
            "Consider creating separate accounts they don't know about",
            "Document instances of password demands if safe to do so"
          ],
          nextSteps: "Consider reaching out to domestic violence services for support and safety planning. Use our Digital Safety Planning resources when it's safe to access them."
        }
      },
      "device-checking": {
        guidance: {
          title: "Device Monitoring by Partner",
          content: "Regular checking of your devices is a serious violation of your privacy and a form of digital abuse.",
          immediateActions: [
            "Use private/incognito browsing mode to avoid leaving history",
            "Clear browsing history and downloads if safe to do so",
            "Be cautious about what you save on monitored devices",
            "Consider using trusted friends' devices for private communication",
            "Delete sensitive messages but keep abusive ones as evidence if safe"
          ],
          nextSteps: "This behavior is concerning. When safe, contact domestic violence services and use our Safety Planning resources."
        }
      },
      "potential-compromise": {
        question: "What makes you think your accounts or devices might be compromised?",
        options: [
          {
            text: "Friends say they received messages I didn't send",
            next: "unauthorized-messages"
          },
          {
            text: "I can't access my accounts or passwords were changed",
            next: "locked-out-accounts"
          },
          {
            text: "Unknown apps appeared on my device",
            next: "unknown-apps-found"
          },
          {
            text: "My device is acting strangely (slow, hot, battery drain)",
            next: "device-behavior-changes"
          },
          {
            text: "Someone knows information they shouldn't have access to",
            next: "leaked-information"
          }
        ]
      },
      "unauthorized-messages": {
        guidance: {
          title: "Unauthorized Messages Sent",
          content: "Messages being sent from your accounts without your knowledge indicates serious account compromise.",
          immediateActions: [
            "Change passwords on ALL affected accounts immediately",
            "Enable two-factor authentication on all accounts",
            "Sign out all devices from your accounts",
            "Inform your contacts that your accounts were compromised",
            "Check for any changes to account settings or recovery information"
          ],
          nextSteps: "Follow our Email Security Checklist and Account Recovery process to fully secure your accounts."
        }
      },
      "harassment-threats": {
        question: "What type of online harassment or threats are you experiencing?",
        options: [
          {
            text: "Threatening or abusive messages on social media or text",
            next: "threatening-messages"
          },
          {
            text: "Someone created fake accounts to contact me",
            next: "fake-accounts-harassment"
          },
          {
            text: "My personal information was shared publicly online",
            next: "doxxing-harassment"
          },
          {
            text: "Someone is impersonating me online",
            next: "impersonation-harassment"
          },
          {
            text: "Continuous contact despite blocking them",
            next: "persistent-harassment"
          }
        ]
      },
      "threatening-messages": {
        guidance: {
          title: "Threatening or Abusive Messages",
          content: "Online threats and abusive messages are serious and may be criminal. Your safety matters.",
          immediateActions: [
            "Take screenshots of all threatening messages (include timestamps)",
            "Do not respond to or engage with the threats",
            "Block the person on all platforms immediately",
            "Report the threats to the platform using their reporting tools",
            "If threats mention violence or real-world harm, contact Gardaí"
          ],
          nextSteps: "Save all evidence safely and consider contacting Women's Aid (1800 341 900) for support and guidance on next steps."
        }
      },
      "prevention-privacy": {
        question: "What aspect of digital privacy and safety would you like to focus on?",
        options: [
          {
            text: "Making my social media accounts more private and secure",
            next: "social-media-privacy"
          },
          {
            text: "Protecting my location information and movements",
            next: "location-privacy-focus"
          },
          {
            text: "Securing my email and online accounts",
            next: "account-security-focus"
          },
          {
            text: "General device security and safe browsing practices",
            next: "device-security-focus"
          },
          {
            text: "Understanding what digital abuse looks like",
            next: "digital-abuse-education"
          }
        ]
      },
      "social-media-privacy": {
        guidance: {
          title: "Social Media Privacy Protection",
          content: "Securing your social media accounts is essential for maintaining privacy and safety online.",
          immediateActions: [
            "Set all your profiles to private (friends/followers only)",
            "Remove personal information like phone numbers and addresses from profiles",
            "Turn off location sharing and geotagging in all apps",
            "Review your friends/followers list and remove people you don't trust",
            "Check privacy settings for who can find you by email or phone number"
          ],
          nextSteps: "Complete our Social Media Privacy Checklist for detailed steps on each platform."
        }
      },
      "supporting-others": {
        question: "How would you like to support someone experiencing digital abuse?",
        options: [
          {
            text: "I see someone being harassed online",
            next: "witnessing-harassment"
          },
          {
            text: "A friend told me they're experiencing digital abuse",
            next: "friend-disclosure"
          },
          {
            text: "I want to learn about digital abuse to help others",
            next: "education-helping"
          },
          {
            text: "I need resources to share with someone",
            next: "resource-sharing"
          }
        ]
      },
      "witnessing-harassment": {
        guidance: {
          title: "Responding to Online Harassment",
          content: "Witnessing online harassment can be distressing, but there are safe ways to help.",
          immediateActions: [
            "Take screenshots of the harassment for evidence (include usernames, timestamps)",
            "Report the abusive content using the platform's reporting tools",
            "Reach out privately to the person being harassed to offer support",
            "Do not engage directly with the harasser - this can escalate the situation",
            "If threats mention violence, alert the person being targeted and consider contacting Gardaí"
          ],
          nextSteps: "Focus on supporting the person being harassed and helping them access professional support services."
        }
      },
      "digital-abuse-education": {
        guidance: {
          title: "Understanding Digital Abuse",
          content: "Digital abuse includes monitoring, controlling, harassing, or threatening someone using technology.",
          immediateActions: [
            "Learn the signs: password demands, device checking, location tracking, threatening messages",
            "Understand that digital abuse often happens alongside other forms of abuse",
            "Know that victims deserve privacy and respect in their digital lives",
            "Remember that the abuser is responsible for their behavior, not the victim",
            "Learn about available resources and support services"
          ],
          nextSteps: "Share information about digital safety resources with others and support anyone who discloses abuse to you."
        }
      }
    }
  },
  relationshipSafety: {
    id: "relationship-safety",
    title: "Relationship & Digital Safety",
    description: "Guidance for digital safety in controlling relationships",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What kind of digital monitoring or control are you experiencing?",
        options: [
          {
            text: "Partner checks my phone/computer regularly",
            next: "device-checking"
          },
          {
            text: "They seem to know where I've been",
            next: "location-tracking"
          },
          {
            text: "They know about my online activities/messages",
            next: "online-monitoring"
          },
          {
            text: "They control my access to technology",
            next: "tech-control"
          },
          {
            text: "I'm worried about planning to leave safely",
            next: "safety-planning"
          }
        ]
      },
      "device-checking": {
        question: "How often do they check your devices?",
        options: [
          {
            text: "Constantly - they demand to see everything",
            next: "constant-monitoring"
          },
          {
            text: "Regularly - several times a week",
            next: "regular-checking"
          },
          {
            text: "Sometimes - when they're suspicious",
            next: "suspicious-checking"
          },
          {
            text: "They've installed apps to monitor me",
            next: "monitoring-apps"
          }
        ]
      },
      "constant-monitoring": {
        guidance: {
          title: "Intensive Digital Control",
          content: "Constant device monitoring is a serious form of abuse. Your safety and privacy matter.",
          immediateActions: [
            "If safe: use a trusted friend's device to access help",
            "Consider using private/incognito browsing when possible",
            "Learn about local support services",
            "Know that this behavior is not normal or acceptable",
            "Remember: you deserve privacy and respect"
          ],
          nextSteps: "When it's safe, use our Safety Planning Checklist. Consider reaching out to domestic violence services."
        }
      },
      "monitoring-apps": {
        guidance: {
          title: "Monitoring Software Installed",
          content: "Hidden monitoring apps are a serious violation of your privacy and autonomy.",
          immediateActions: [
            "Do NOT remove apps immediately if unsafe to do so",
            "Document evidence of monitoring if safe",
            "Use a different, secure device for private communication",
            "Contact domestic violence helpline for guidance",
            "Plan for your safety first"
          ],
          nextSteps: "Follow our Device Security Checklist when it's safe. Priority is your physical safety."
        }
      },
      "safety-planning": {
        question: "What aspect of digital safety planning concerns you most?",
        options: [
          {
            text: "Communicating safely for help",
            next: "safe-communication"
          },
          {
            text: "Hiding my plans from monitoring",
            next: "hiding-plans"
          },
          {
            text: "Securing new accounts/devices",
            next: "new-accounts"
          },
          {
            text: "Protecting my location after leaving",
            next: "location-safety"
          }
        ]
      },
      "safe-communication": {
        guidance: {
          title: "Safe Communication Planning",
          content: "Communicating safely while being monitored requires careful planning.",
          immediateActions: [
            "Use a trusted friend's phone/computer when possible",
            "Consider using public computers at libraries",
            "Learn helpline numbers by heart",
            "Use private/incognito browsing mode",
            "Clear browser history after use if safe to do so"
          ],
          nextSteps: "Follow our Safe Communication Checklist for detailed guidance on staying connected safely."
        }
      },
      "hiding-plans": {
        guidance: {
          title: "Concealing Digital Activity",
          content: "Hiding safety planning from monitoring requires specific techniques.",
          immediateActions: [
            "Use private browsing mode always",
            "Clear all browser history and downloads",
            "Use different devices when possible",
            "Avoid saving any safety-related bookmarks",
            "Consider using code words with trusted friends"
          ],
          nextSteps: "Use our Digital Hiding Checklist, but remember: your physical safety is most important."
        }
      },
      "tech-control": {
        guidance: {
          title: "Technology Access Control",
          content: "Controlling your access to technology is a form of isolation and abuse.",
          immediateActions: [
            "Know that this is a form of abuse",
            "Use any brief access to research help resources",
            "Memorize important phone numbers",
            "Know locations of public computers/phones",
            "Connect with trusted friends/family when possible"
          ],
          nextSteps: "When you have access, use our Technology Access Checklist to plan for independence."
        }
      },
      "regular-checking": {
        guidance: {
          title: "Regular Device Monitoring",
          content: "Regular checking of your devices is a serious violation of your privacy.",
          immediateActions: [
            "Recognize this as controlling behavior",
            "Use private browsing when possible",
            "Clear history if safe to do so",
            "Consider using trusted friends' devices for private communication",
            "Document the controlling behavior if safe"
          ],
          nextSteps: "When safe, follow our Safety Planning Checklist for guidance on protecting your privacy."
        }
      },
      "suspicious-checking": {
        guidance: {
          title: "Suspicious Device Checking",
          content: "Even occasional device checking shows concerning controlling behavior.",
          immediateActions: [
            "Use private browsing mode",
            "Be cautious about what you save on the device",
            "Consider deleting browsing history regularly",
            "Use code words with trusted friends",
            "Trust your instincts about your safety"
          ],
          nextSteps: "Consider using our Safety Planning resources when you feel ready."
        }
      },
      "online-monitoring": {
        guidance: {
          title: "Online Activity Monitoring",
          content: "Monitoring your online activities is a form of digital stalking and control.",
          immediateActions: [
            "Change passwords if safe to do so",
            "Check for monitoring apps or keyloggers",
            "Use private browsing mode",
            "Consider creating separate, secret accounts",
            "Reach out for support when it's safe"
          ],
          nextSteps: "Follow our Digital Privacy Protection Checklist when it's safe to do so."
        }
      },
      "location-tracking": {
        guidance: {
          title: "Location Tracking by Partner",
          content: "Being tracked by a partner is a serious form of surveillance and control.",
          immediateActions: [
            "Check your phone for tracking apps",
            "Turn off location sharing if safe",
            "Consider leaving phone at home occasionally if safe",
            "Vary your routes and routines when possible",
            "Tell trusted friends about the tracking"
          ],
          nextSteps: "Use our Location Privacy Checklist when it's safe to access it."
        }
      },
      "new-accounts": {
        guidance: {
          title: "Securing New Accounts",
          content: "Setting up secure, private accounts is crucial for safety planning.",
          immediateActions: [
            "Use a different device if possible",
            "Create new email from a safe location",
            "Use strong, unique passwords",
            "Enable two-factor authentication",
            "Don't use names or details they know"
          ],
          nextSteps: "Follow our Account Security Setup checklist for complete protection."
        }
      },
      "location-safety": {
        guidance: {
          title: "Post-Separation Location Safety",
          content: "Protecting your location after leaving requires careful digital planning.",
          immediateActions: [
            "Turn off all location sharing",
            "Change all account passwords",
            "Check for tracking apps on all devices",
            "Consider getting a new phone if possible",
            "Review social media privacy settings"
          ],
          nextSteps: "Complete our Post-Separation Digital Safety Checklist."
        }
      }
    }
  },
  socialMediaSafety: {
    id: "social-media-safety",
    title: "Social Media & Online Safety",
    description: "Protect yourself on social platforms",
    startNode: "initial",
    nodes: {
      initial: {
        question: "What social media safety concern do you have?",
        options: [
          {
            text: "Someone is harassing me online",
            next: "harassment"
          },
          {
            text: "My accounts keep getting hacked",
            next: "account-hacking"
          },
          {
            text: "Someone is impersonating me",
            next: "impersonation"
          },
          {
            text: "I'm worried about my privacy settings",
            next: "privacy-settings"
          },
          {
            text: "Someone is sharing my private information",
            next: "doxxing"
          }
        ]
      },
      "harassment": {
        question: "What type of harassment are you experiencing?",
        options: [
          {
            text: "Threatening messages or comments",
            next: "threats"
          },
          {
            text: "Unwanted contact after blocking",
            next: "persistent-contact"
          },
          {
            text: "Sharing intimate images without consent",
            next: "image-abuse"
          },
          {
            text: "Creating fake accounts to contact me",
            next: "fake-accounts"
          }
        ]
      },
      "threats": {
        guidance: {
          title: "Online Threats",
          content: "Online threats should be taken seriously and documented.",
          immediateActions: [
            "Screenshot all threatening messages",
            "Report to the platform immediately",
            "Block the user on all platforms",
            "Consider reporting to police if threats are serious",
            "Tell trusted friends/family about the situation"
          ],
          nextSteps: "Follow our Online Harassment Documentation Checklist and consider legal advice."
        }
      },
      "doxxing": {
        guidance: {
          title: "Personal Information Exposed",
          content: "Having private information shared online is serious and potentially dangerous.",
          immediateActions: [
            "Document where your information is posted",
            "Report to platforms for removal",
            "Consider changing phone number/email if shared",
            "Alert local police if you feel unsafe",
            "Review all privacy settings immediately"
          ],
          nextSteps: "Use our Anti-Doxxing Checklist to secure your personal information."
        }
      },
      "account-hacking": {
        guidance: {
          title: "Repeated Account Compromise",
          content: "Multiple account breaches suggest systematic targeting or poor security practices.",
          immediateActions: [
            "Change passwords on ALL accounts immediately",
            "Enable two-factor authentication everywhere",
            "Check for monitoring software on your devices",
            "Review account recovery methods",
            "Consider if someone has access to your primary email"
          ],
          nextSteps: "Follow our Complete Account Security Audit to prevent future breaches."
        }
      },
      "impersonation": {
        guidance: {
          title: "Account Impersonation",
          content: "Someone creating fake accounts pretending to be you is serious identity theft.",
          immediateActions: [
            "Report impersonation accounts to platforms immediately",
            "Screenshot fake profiles as evidence",
            "Alert friends and family about impersonation",
            "Monitor search results for your name",
            "Consider reporting to police if serious harm"
          ],
          nextSteps: "Use our Identity Protection Checklist to prevent future impersonation."
        }
      },
      "privacy-settings": {
        guidance: {
          title: "Social Media Privacy Review",
          content: "Regularly reviewing privacy settings is essential for digital safety.",
          immediateActions: [
            "Set all profiles to private/friends only",
            "Remove personal information from public view",
            "Review who can find you by email/phone",
            "Turn off location sharing and geotagging",
            "Limit who can see your friends list"
          ],
          nextSteps: "Complete our Social Media Privacy Checklist for comprehensive protection."
        }
      },
      "persistent-contact": {
        guidance: {
          title: "Continued Contact After Blocking",
          content: "Circumventing blocks to continue contact is harassment and stalking behavior.",
          immediateActions: [
            "Document all attempts to contact you",
            "Report new accounts to platforms",
            "Block new accounts immediately",
            "Save screenshots of all harassment",
            "Consider reporting to authorities"
          ],
          nextSteps: "Follow our Persistent Harassment Documentation process and consider legal action."
        }
      },
      "image-abuse": {
        guidance: {
          title: "Non-Consensual Image Sharing",
          content: "Sharing intimate images without consent is illegal in many places and deeply harmful.",
          immediateActions: [
            "Document where images are posted",
            "Report to platforms immediately for removal",
            "Contact a specialized helpline for support",
            "Consider legal action - this may be criminal",
            "Reach out to trusted friends for emotional support"
          ],
          nextSteps: "Contact specialized legal and emotional support services for this serious violation."
        }
      },
      "fake-accounts": {
        guidance: {
          title: "Fake Accounts for Contact",
          content: "Creating fake accounts to contact someone is stalking behavior.",
          immediateActions: [
            "Report all fake accounts to platforms",
            "Block accounts immediately",
            "Screenshot evidence of fake accounts",
            "Consider making your accounts more private",
            "Alert trusted contacts about fake accounts"
          ],
          nextSteps: "Document this pattern and consider reporting to authorities for stalking."
        }
      }
    }
  }
};

export const checklists = {
  emailSecurity: {
    id: "email-security",
    title: "Email Account Security Checklist",
    description: "Secure your email account step by step",
    items: [
      {
        id: "change-password",
        text: "Change your email password to something strong and unique",
        detail: "Use a password manager or create a passphrase with 4+ random words"
      },
      {
        id: "enable-2fa",
        text: "Enable two-factor authentication (2FA)",
        detail: "Use authenticator app rather than SMS when possible"
      },
      {
        id: "check-recovery",
        text: "Verify recovery email and phone number are yours",
        detail: "Remove any recovery methods you don't recognize"
      },
      {
        id: "review-activity",
        text: "Check recent login activity for suspicious access",
        detail: "Look for logins from unknown locations or devices"
      },
      {
        id: "sign-out-devices",
        text: "Sign out of all devices and sessions",
        detail: "Force logout from all locations, then sign back in on trusted devices"
      },
      {
        id: "app-permissions",
        text: "Review and revoke suspicious app permissions",
        detail: "Remove access for apps you don't recognize or no longer use"
      },
      {
        id: "forwarding-rules",
        text: "Check for email forwarding rules you didn't create",
        detail: "Delete any rules that forward emails to addresses you don't recognize"
      },
      {
        id: "backup-data",
        text: "Export important emails if safe to do so",
        detail: "Download copies of critical emails before making major changes"
      }
    ]
  },
  deviceSecurity: {
    id: "device-security", 
    title: "Device Security Checklist",
    description: "Check your device for potential monitoring software",
    items: [
      {
        id: "review-apps",
        text: "Review all installed apps for unfamiliar ones",
        detail: "Look especially for apps with generic names or no clear purpose"
      },
      {
        id: "check-permissions",
        text: "Review app permissions for camera, microphone, location",
        detail: "Remove permissions from apps that don't need them"
      },
      {
        id: "battery-usage",
        text: "Check battery usage by app",
        detail: "Look for apps using significant power that you don't actively use"
      },
      {
        id: "data-usage",
        text: "Monitor data usage by individual apps",
        detail: "Identify apps sending data when you're not using them"
      },
      {
        id: "background-refresh",
        text: "Turn off background app refresh for suspicious apps",
        detail: "Prevent apps from running and updating when not in use"
      },
      {
        id: "location-services",
        text: "Review location services settings",
        detail: "Turn off location access for apps that don't need it"
      },
      {
        id: "update-software",
        text: "Update operating system and all apps",
        detail: "Install latest security patches and updates"
      },
      {
        id: "antivirus-scan",
        text: "Run device security scan if available",
        detail: "Use built-in security tools or reputable antivirus apps"
      },
      {
        id: "secure-lock",
        text: "Ensure device has strong lock screen protection",
        detail: "Use PIN, password, fingerprint, or face unlock"
      },
      {
        id: "factory-reset",
        text: "Consider factory reset if seriously concerned",
        detail: "Last resort option - backup important data first if safe to do so"
      }
    ]
  },
  locationPrivacy: {
    id: "location-privacy",
    title: "Location Privacy Checklist", 
    description: "Protect your location information from unwanted tracking",
    items: [
      {
        id: "location-history",
        text: "Turn off location history in Google/Apple accounts",
        detail: "Disable timeline tracking and delete existing history"
      },
      {
        id: "app-location",
        text: "Review location permissions for all apps",
        detail: "Only allow location access for apps that truly need it"
      },
      {
        id: "social-media",
        text: "Turn off location sharing on social media",
        detail: "Disable geotagging, check-ins, and location-based features"
      },
      {
        id: "find-my-device",
        text: "Check who has access to Find My Device features",
        detail: "Ensure only you can track your device location"
      },
      {
        id: "family-sharing",
        text: "Review family/location sharing settings",
        detail: "Turn off sharing with people you don't want tracking you"
      },
      {
        id: "wifi-bluetooth",
        text: "Turn off WiFi and Bluetooth when not needed",
        detail: "These can be used for location tracking even when location is off"
      },
      {
        id: "photos-metadata",
        text: "Turn off location data in photos",
        detail: "Prevent location information from being saved in pictures"
      },
      {
        id: "advertising-id",
        text: "Reset advertising ID and limit ad tracking",
        detail: "Reduce location-based advertising and tracking"
      }
    ]
  },
  accountRecovery: {
    id: "account-recovery",
    title: "Account Recovery Checklist",
    description: "Steps to recover compromised accounts",
    items: [
      {
        id: "contact-support",
        text: "Contact account provider support immediately",
        detail: "Use official support channels, have ID ready for verification"
      },
      {
        id: "alternative-recovery",
        text: "Try all available recovery methods",
        detail: "Backup email, phone number, security questions, trusted devices"
      },
      {
        id: "prove-identity",
        text: "Prepare identity verification documents",
        detail: "Have government ID, proof of address, account creation details ready"
      },
      {
        id: "document-changes",
        text: "Screenshot any suspicious account changes",
        detail: "Evidence of unauthorized changes helps with recovery process"
      },
      {
        id: "secure-other-accounts",
        text: "Immediately secure all other accounts",
        detail: "Change passwords on accounts that used compromised email"
      },
      {
        id: "notify-contacts",
        text: "Warn trusted contacts about the compromise",
        detail: "Let them know not to trust messages from compromised account"
      },
      {
        id: "monitor-activity",
        text: "Watch for further suspicious activity",
        detail: "Check other accounts for signs of compromise"
      },
      {
        id: "new-security",
        text: "Set up stronger security once recovered",
        detail: "New password, 2FA, updated recovery methods"
      }
    ]
  },
  safetyPlanning: {
    id: "safety-planning",
    title: "Digital Safety Planning Checklist",
    description: "Plan for digital safety in controlling relationships",
    items: [
      {
        id: "secure-device",
        text: "Create a safety plan for device use",
        detail: "Know when and where you can safely access devices"
      },
      {
        id: "safe-communication",
        text: "Establish safe communication methods",
        detail: "Use trusted friends' devices, public computers, or secure apps"
      },
      {
        id: "emergency-contacts",
        text: "Memorize important phone numbers",
        detail: "Helplines, trusted friends, family - don't save in phone if unsafe"
      },
      {
        id: "financial-accounts",
        text: "Plan for financial account security",
        detail: "Consider separate accounts, change online banking passwords"
      },
      {
        id: "social-media",
        text: "Secure social media accounts",
        detail: "Change passwords, review privacy settings, consider deactivating temporarily"
      },
      {
        id: "location-privacy",
        text: "Protect your location information",
        detail: "Turn off location sharing, check apps with location access"
      },
      {
        id: "evidence-documentation",
        text: "Safely document abuse evidence",
        detail: "Screenshot messages, save to secure cloud account from safe location"
      },
      {
        id: "exit-strategy",
        text: "Plan technology needs for leaving",
        detail: "New phone, secure email, important documents backed up safely"
      }
    ]
  },
  safeCommunication: {
    id: "safe-communication",
    title: "Safe Communication Checklist",
    description: "Communicate safely while being monitored",
    items: [
      {
        id: "alternative-devices",
        text: "Use devices your abuser doesn't monitor",
        detail: "Friend's phone, public library computers, work computers"
      },
      {
        id: "private-browsing",
        text: "Always use private/incognito browsing",
        detail: "Prevents history from being saved on the device"
      },
      {
        id: "clear-history",
        text: "Clear browser history and downloads after use",
        detail: "Remove all traces of safety-related browsing"
      },
      {
        id: "secure-apps",
        text: "Use secure messaging apps when safe",
        detail: "Signal, WhatsApp with disappearing messages - but be careful about installation"
      },
      {
        id: "code-words",
        text: "Establish code words with trusted contacts",
        detail: "Secret phrases to indicate danger or need for help"
      },
      {
        id: "timing-safety",
        text: "Choose safe times for communication",
        detail: "When abuser is away, asleep, or distracted"
      },
      {
        id: "helpline-access",
        text: "Know how to contact helplines safely",
        detail: "Memorize numbers, know online chat options"
      },
      {
        id: "emergency-plan",
        text: "Have emergency communication ready",
        detail: "Pre-written messages, emergency contacts ready to call"
      }
    ]
  },
  antiDoxxing: {
    id: "anti-doxxing",
    title: "Anti-Doxxing Checklist",
    description: "Protect against personal information exposure",
    items: [
      {
        id: "review-public-info",
        text: "Audit what personal information is publicly available",
        detail: "Search your name, check social media profiles, review public records"
      },
      {
        id: "privacy-settings",
        text: "Maximize privacy settings on all accounts",
        detail: "Facebook, Instagram, Twitter, LinkedIn - make everything private"
      },
      {
        id: "remove-personal-info",
        text: "Remove personal information from public profiles",
        detail: "Phone numbers, addresses, workplace, relationship status"
      },
      {
        id: "secure-addresses",
        text: "Consider alternative addresses for sensitive accounts",
        detail: "Use P.O. Box or trusted friend's address for important accounts"
      },
      {
        id: "phone-privacy",
        text: "Protect phone number privacy",
        detail: "Remove from public directories, use Google Voice for public use"
      },
      {
        id: "email-protection",
        text: "Use separate emails for different purposes",
        detail: "Private email for close contacts, public email for general use"
      },
      {
        id: "data-broker-removal",
        text: "Request removal from data broker sites",
        detail: "Contact sites like Spokeo, WhitePages, BeenVerified to remove listings"
      },
      {
        id: "monitor-mentions",
        text: "Set up alerts for your name online",
        detail: "Google Alerts to monitor when your information appears online"
      }
    ]
  },
  harrassmentDocumentation: {
    id: "harassment-documentation",
    title: "Online Harassment Documentation Checklist",
    description: "Document and respond to online harassment",
    items: [
      {
        id: "screenshot-evidence",
        text: "Screenshot all harassing messages and posts",
        detail: "Include timestamps, usernames, and URLs in screenshots"
      },
      {
        id: "save-urls",
        text: "Save direct links to harassing content",
        detail: "Copy and save URLs before content might be deleted"
      },
      {
        id: "report-platforms",
        text: "Report harassment to each platform",
        detail: "Use official reporting tools on Facebook, Twitter, Instagram, etc."
      },
      {
        id: "block-accounts",
        text: "Block harassing accounts immediately",
        detail: "Block on all platforms where you have accounts"
      },
      {
        id: "document-timeline",
        text: "Keep a timeline of harassment incidents",
        detail: "Date, time, platform, what happened, screenshots saved"
      },
      {
        id: "backup-evidence",
        text: "Store evidence in multiple secure locations",
        detail: "Cloud storage, external drive, email to yourself"
      },
      {
        id: "report-authorities",
        text: "Consider reporting to police if threats are serious",
        detail: "Especially if threats mention violence or real-world harm"
      },
      {
        id: "inform-trusted-contacts",
        text: "Tell trusted friends and family about the situation",
        detail: "They can help monitor for fake accounts and provide support"
      }
    ]
  },
  completePrivacyAudit: {
    id: "complete-privacy-audit",
    title: "Complete Privacy Audit Checklist",
    description: "Comprehensive review of all digital privacy",
    items: [
      {
        id: "password-audit",
        text: "Change passwords on ALL accounts",
        detail: "Email, social media, banking, shopping, streaming - everything"
      },
      {
        id: "enable-2fa-everywhere",
        text: "Enable two-factor authentication on every account that offers it",
        detail: "Use authenticator app when possible, SMS as backup"
      },
      {
        id: "device-cleanup",
        text: "Remove unknown apps and review all permissions",
        detail: "Check phone, computer, tablets for suspicious software"
      },
      {
        id: "account-connections",
        text: "Review all connected apps and services",
        detail: "Facebook apps, Google account access, third-party services"
      },
      {
        id: "email-forensics",
        text: "Deep dive into email security",
        detail: "Forwarding rules, filters, authorized apps, login history"
      },
      {
        id: "location-audit",
        text: "Turn off location tracking everywhere",
        detail: "Google, Apple, social media, apps - disable location history"
      },
      {
        id: "social-media-lockdown",
        text: "Make all social media accounts private",
        detail: "Remove personal information, limit who can find you"
      },
      {
        id: "financial-security",
        text: "Secure all financial accounts",
        detail: "Banks, credit cards, investment accounts, payment apps"
      },
      {
        id: "recovery-methods",
        text: "Update recovery information on all accounts",
        detail: "Ensure backup emails and phone numbers are secure and yours"
      },
      {
        id: "regular-monitoring",
        text: "Set up ongoing security monitoring",
        detail: "Account alerts, credit monitoring, regular security check-ups"
      }
    ]
  }
};