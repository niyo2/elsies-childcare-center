# Elsie’s Childcare & Learning Center – Updated Build

## Included
- Corrected enrollment routes and confirmed tuition copy
- Updated confirmed tagline
- Functional Firestore enrollment, tour, and contact forms
- Firebase Authentication parent registration/login
- Protected Parent Portal
- Role-protected Admin Dashboard
- Updated staff profiles and photos
- Firestore security rules

## Firebase console steps before using login/admin
1. Firebase Console > Authentication > Sign-in method > enable **Email/Password**.
2. Deploy Firestore rules: `firebase deploy --only firestore:rules`.
3. Create your own account through `/parent-login`.
4. In Firestore, open `users/{your uid}` and change `role` from `parent` to `admin` manually for the owner/director account. Never add an admin sign-up form to the public site.
5. Build and deploy: `npm run build && firebase deploy --only hosting`.

## Important
Public form creation is enabled so prospective families can submit forms. Admin-only reads protect those records. For production, add Firebase App Check and consider server-side abuse protection/rate limiting.
