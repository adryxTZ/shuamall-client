export const publicRoutes = [
    "/",
   ,


];

export const authRoutes = [
    "/signin",
    "/signup"
]

/**
 *The prefix for API authentication routes
 * Route to start with this prefix are used for API authentication purpose
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";


/**
 *Default redirect path for logging in users
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/dashboard";
