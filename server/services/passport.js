const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/keys");

const User = mongoose.model("users");

passport.use(
  new GoogleStrategy(
    {
      clientID: keys.googleClientID,
      clientSecret: keys.googleClientSecret,
      callbackURL: "/auth/google/callback",
    },
    (accesToken, refreshToken, profile, done) => {
      User.findOne({ googleId: profile.id }).then((exsistingUser) => {
        if (exsistingUser) {
          // we already have a record with the given profile ID
          done(null, exsistingUser);
        } else {
          // we dont have user record with user ID, make a new record
          new User({ googleId: profile.id })
            .save()
            .then((user) => done(null, user));
        }
      });
    }
  )
);
