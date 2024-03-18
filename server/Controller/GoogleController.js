import GoogleUser from "../Model/GoogleUser";

const getGoogleUser = async (
  accessToken,
  refreshToken,
  profile,
  done
) => {
  try {
    let googleUser = await GoogleUser.findOne({ googleId: profile.id });
    if (!googleUser) {
      googleUser = new GoogleUser({
        googleId: profile.id,
        displayName: profile.displayName,
        email: profile.email[0].value,
        image: profile.photos[0].value,
      });
      await googleUser.save();
    }
    return done(null, googleUser);
  } catch (error) {
    return done(error, null);
  }
};

export default getGoogleUser

