import React from 'react';

const MobileNav = () => {
    return (
        <>
            <nav

                id="navbarCollapse"
                className=" absolute block right-4 top-full z-50 w-full max-w-[250px] justify-center rounded-lg bg-white dark:bg-dark-2 py-5 px-6 shadow lg:static lg:hidden md:hidden"
            >
                <ul className="items-center block lg:flex">
                    <li>
                        <a
                            href={"/"}
                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                        >
                           Home
                        </a>
                    </li>


                    <li>
                        <a
                            href={"/shops"}
                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                        >
                           Shops
                        </a>
                    </li>
                    <li>
                        <a
                            href={"/products"}
                            className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"
                        >
                           Products
                        </a>
                    </li>
                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                    {/*    >*/}
                    {/*       Auto parts & Accessories*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                    {/*    >*/}
                    {/*        Kitchen Accessories*/}
                    {/*    </a>*/}
                    {/*</li>*/}

                    {/*<li>*/}
                    {/*    <a*/}
                    {/*        href="#"*/}
                    {/*        className="flex justify-between py-2 text-base font-medium text-body-color dark:text-dark-6 hover:text-primary lg:mx-4 lg:inline-flex lg:py-6"*/}
                    {/*    >*/}
                    {/*        Other Categories*/}
                    {/*    </a>*/}
                    {/*</li>*/}
                </ul>
            </nav>
        </>
    );
};

export default MobileNav;