### 02/08 | Sam & Philip | Create offline data

1. Created libs/offlineData.js to be used in lieu of calling API
2. Commented functionality which calls API from index.js- substituted it with an import of offlineData.js
3. Deleted things we don't need from offlineData.js (number of reviews, ranking etc.)
4. Deleted things we don't need from PlaceDetail.js (number of reviews, ranking etc.)
5. Added accesibility item to offlineData.js (see below for format)
6. Added some minor bits and bops that we need to offlineData.js (phone number, web adddress, opening times etc.)
7. Updated Undefined_manifesto.md
8. Simplified path to venue photo in offlineData.js

<br>

# Standards

### Accesibility items in our database

```
acessibility: {
      step_free: {
        token: "step_free",
        label: "This venue has step-free access.",
      },
      braille: {
        token: "braille",
        label: "This venue has materials printed in Braille alphabet.",
      },
      sign_lang: {
        token: "sign_lang",
        label: "This venue employs staff who know British Sign Language.",
      },
      quiet: {
        token: "quiet",
        label: "This venue has a quiet zone.",
      },
    },
```
