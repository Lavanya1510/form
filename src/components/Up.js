import React, { Component } from 'react'

export class Up extends Component {
    render() {
        return (

            <div>

<div class="page-loader">
	<div class="bg-primary"></div>
</div>
<div class="layout-wrapper layout-2">
    <div class="layout-inner">
		<div id="layout-sidenav" class="layout-sidenav sidenav sidenav-vertical bg-dark">
            <div class="app-brand demo">
                        <span class="app-brand-logo demo">
							<img src="assets/img/logo.png" alt="Brand Logo" class="img-fluid" />
                        </span>
                        <a href="index.html" class="app-brand-text demo sidenav-text font-weight-normal ml-2">Bhumlu</a>
                        <a href="javascript:" class="layout-sidenav-toggle sidenav-link text-large ml-auto">
                        <i class="ion ion-md-menu align-middle"></i>
                        </a>
            </div>
				<div class="sidenav-divider mt-0">
				</div>
				<ul class="sidenav-inner py-1">
                        <li class="sidenav-item">
                            <a href="index.html" class="sidenav-link">
                                <i class="sidenav-icon feather icon-home"></i>
                                <div>Dashboards</div>
                                <div class="pl-1 ml-auto">
                                    <div class="badge badge-danger">Hot</div>
                                </div>
                            </a>
                        </li>
                        <li class="sidenav-divider mb-1"></li>
                        <li class="sidenav-header small font-weight-semibold">UI Components</li>
                        <li class="sidenav-item">
                            <a href="typography.html" class="sidenav-link">
                                <i class="sidenav-icon feather icon-type"></i>
                                <div>Typography</div>
                            </a>
                        </li>
						<li class="sidenav-item">
							<a href="javascript:" class="sidenav-link sidenav-toggle">
								<i class="sidenav-icon feather icon-box"></i>
								<div>UI components</div>
							</a>
							<ul class="sidenav-menu">
                            <li class="sidenav-item">
                                <a href="bui_alert.html" class="sidenav-link">
                                    <div>Alerts</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="bui_badges.html" class="sidenav-link">
                                    <div>Badges</div>
                                </a>
                            </li>
                            <li class="sidenav-item ">
                                <a href="bui_button.html" class="sidenav-link">
                                    <div>Buttons</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="charts_morrisjs.html" class="sidenav-link">
                                    <div>Charts</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="bui_dropdowns.html" class="sidenav-link">
                                    <div>Dropdowns</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="bui_pagination.html" class="sidenav-link">
                                    <div>Pagination and breadcrumbs</div>
                                </a>
                            </li>
                            <li class="sidenav-item">
                                <a href="bui_progress.html" class="sidenav-link">
                                    <div>Progress bars</div>
                                </a>
                            </li>
                        </ul>
						</li>
						<li class="sidenav-divider mb-1"></li>
						<li class="sidenav-header small font-weight-semibold">Forms & Tables</li>
						<li class="sidenav-item active open">
							<a href="javascript:" class="sidenav-link sidenav-toggle">
								<i class="sidenav-icon feather icon-clipboard"></i>
								<div>Forms</div>
							</a>
							<ul class="sidenav-menu">
								<li class="sidenav-item active">
									<a href="forms_layouts.html" class="sidenav-link">
										<div>Layouts and elements</div>
									</a>
								</li>
								<li class="sidenav-item">
									<a href="forms_input-groups.html" class="sidenav-link">
										<div>Input groups</div>
									</a>
								</li>
							</ul>
						</li>
						<li class="sidenav-item">
							<a href="tables_bootstrap.html" class="sidenav-link">
								<i class="sidenav-icon feather icon-grid"></i>
								<div>Tables</div>
							</a>
						</li>
						<li class="sidenav-divider mb-1"></li>
						<li class="sidenav-header small font-weight-semibold">Icons</li>
						<li class="sidenav-item">
							<a href="javascript:" class="sidenav-link sidenav-toggle">
								<i class="sidenav-icon feather icon-feather"></i>
								<div>Icons</div>
							</a>
							<ul class="sidenav-menu">
								<li class="sidenav-item">
									<a href="icons_feather.html" class="sidenav-link">
										<div>Feather</div>
									</a>
								</li>
								<li class="sidenav-item">
									<a href="icons_linearicons.html" class="sidenav-link">
										<div>Linearicons</div>
									</a>
								</li>
							</ul>
						</li>
						<li class="sidenav-divider mb-1"></li>
						<li class="sidenav-header small font-weight-semibold">Pages</li>
						<li class="sidenav-item">
							<a href="pages_authentication_login-v1.html" class="sidenav-link">
								<i class="sidenav-icon feather icon-lock"></i>
								<div>Login</div>
							</a>
						</li>
						<li class="sidenav-item">
							<a href="pages_authentication_register-v1.html" class="sidenav-link">
								<i class="sidenav-icon feather icon-user"></i>
								<div>Signup</div>
							</a>
						</li>
						<li class="sidenav-item">
                        <a href="pages_faq.html" class="sidenav-link">
                            <i class="sidenav-icon feather icon-anchor"></i>
                            <div>FAQ</div>
                        </a>
                    </li>
                </ul>
            </div>
            <div class="layout-container">

                <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x" id="layout-navbar">
                <a href="index.html" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
                        <span class="app-brand-logo demo">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                        </span>
                        <span class="app-brand-text demo font-weight-normal ml-2">Bhumlu</span>
                    </a>
                    <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                        <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                            <i class="ion ion-md-menu text-large align-middle"></i>
                        </a>
                    </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="navbar-collapse collapse" id="layout-navbar-collapse">
                    <hr class="d-lg-none w-100 my-2" />
                    <div class="navbar-nav align-items-lg-center">
                    <label class="nav-item navbar-text navbar-search-box p-0 active">
                                <i class="feather icon-search navbar-icon align-middle"></i>
                                <span class="navbar-search-input pl-2">
                                  <input type="text" class="form-control navbar-text mx-2" placeholder="Search..." />
                                </span>
                            </label>
                    </div>
                    <div class="navbar-nav align-items-lg-center ml-auto">
                    <div class="demo-navbar-notifications nav-item dropdown mr-lg-3">
                    <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                                    <i class="feather icon-bell navbar-icon align-middle"></i>
                                    <span class="badge badge-danger badge-dot indicator"></span>
                                    <span class="d-lg-none align-middle">&nbsp; Notifications</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                <div class="bg-primary text-center text-white font-weight-bold p-3">
                                        4 New Notifications
                                    </div>
                                    <div class="list-group list-group-flush">
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <div class="ui-icon ui-icon-sm feather icon-home bg-secondary border-0 text-white"></div>
                                            <div class="media-body line-height-condenced ml-3">
                                                <div class="text-dark">Login from 192.168.1.1</div>
                                                <div class="text-light small mt-1">
                                                    Aliquam ex eros, imperdiet vulputate hendrerit et.
                                                </div>
                                                <div class="text-light small mt-1">12h ago</div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <div class="ui-icon ui-icon-sm feather icon-user-plus bg-info border-0 text-white"></div>
                                            <div class="media-body line-height-condenced ml-3">
                                                <div class="text-dark">You have
                                                    <strong>4</strong> new followers</div>
                                                <div class="text-light small mt-1">
                                                    Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <div class="ui-icon ui-icon-sm feather icon-power bg-danger border-0 text-white"></div>
                                            <div class="media-body line-height-condenced ml-3">
                                                <div class="text-dark">Server restarted</div>
                                                <div class="text-light small mt-1">
                                                    19h ago
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <div class="ui-icon ui-icon-sm feather icon-alert-triangle bg-warning border-0 text-dark"></div>
                                            <div class="media-body line-height-condenced ml-3">
                                                <div class="text-dark">99% server load</div>
                                                <div class="text-light small mt-1">
                                                    Etiam nec fringilla magna. Donec mi metus.
                                                </div>
                                                <div class="text-light small mt-1">
                                                    20h ago
                                                </div>
                                            </div>
                                        </a>
                                        </div>
                                        <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all notifications</a>
                                </div>
                        </div>
                        <div class="demo-navbar-messages nav-item dropdown mr-lg-3">
                        <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
                                    <i class="feather icon-mail navbar-icon align-middle"></i>
                                    <span class="badge badge-success badge-dot indicator"></span>
                                    <span class="d-lg-none align-middle">&nbsp; Messages</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                <div class="bg-primary text-center text-white font-weight-bold p-3">
                                        4 New Messages
                                    </div>
                                    <div class="list-group list-group-flush">
                                    <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <img src="assets/img/avatars/6-small.png" class="d-block ui-w-40 rounded-circle" alt />
                                            <div class="media-body ml-3">
                                                <div class="text-dark line-height-condenced">Lorem ipsum dolor consectetuer elit.</div>
                                                <div class="text-light small mt-1">
                                                    Josephin Doe &nbsp;·&nbsp; 58m ago
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <img src="assets/img/avatars/4-small.png" class="d-block ui-w-40 rounded-circle" alt />
                                            <div class="media-body ml-3">
                                                <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, consectetuer.</div>
                                                <div class="text-light small mt-1">
                                                    Lary Doe &nbsp;·&nbsp; 1h ago
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <img src="assets/img/avatars/5-small.png" class="d-block ui-w-40 rounded-circle" alt />
                                            <div class="media-body ml-3">
                                                <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet elit.</div>
                                                <div class="text-light small mt-1">
                                                    Alice &nbsp;·&nbsp; 2h ago
                                                </div>
                                            </div>
                                        </a>
                                        <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                                            <img src="assets/img/avatars/11-small.png" class="d-block ui-w-40 rounded-circle" alt />
                                            <div class="media-body ml-3">
                                                <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet consectetuer amet elit dolor sit.</div>
                                                <div class="text-light small mt-1">
                                                    Suzen &nbsp;·&nbsp; 5h ago
                                                </div>
                                            </div>
                                        </a>
                                </div>
                                <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all messages</a>

                                </div>
                        </div>

                        <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
                        <div class="demo-navbar-user nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
                                    <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                                        <img src="assets/img/avatars/1.png" alt class="d-block ui-w-30 rounded-circle" />
                                        <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Cindy Deitch</span>
                                    </span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right">
                                    <a href="javascript:" class="dropdown-item">
                                        <i class="feather icon-user text-muted"></i> &nbsp; My profile</a>
                                    <a href="javascript:" class="dropdown-item">
                                        <i class="feather icon-mail text-muted"></i> &nbsp; Messages</a>
                                    <a href="javascript:" class="dropdown-item">
                                        <i class="feather icon-settings text-muted"></i> &nbsp; Account settings</a>
                                    <div class="dropdown-divider"></div>
                                    <a href="javascript:" class="dropdown-item">
                                        <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
                                </div>
                            
                            </div>


                        
                    </div>
           
                    </div>
                </nav>
                
                   
				
		                        
	                        </div>
                        </div>
                    </div>

            <nav class="layout-navbar navbar navbar-expand-lg align-items-lg-center bg-white container-p-x" id="layout-navbar">
                    <a href="index.html" class="navbar-brand app-brand demo d-lg-none py-0 mr-4">
                        <span class="app-brand-logo demo">
                            <img src="assets/img/logo-dark.png" alt="Brand Logo" class="img-fluid" />
                            </span>
                        <span class="app-brand-text demo font-weight-normal ml-2">Bhumlu</span>
                    </a>
                    <div class="layout-sidenav-toggle navbar-nav d-lg-none align-items-lg-center mr-auto">
                        <a class="nav-item nav-link px-0 mr-lg-4" href="javascript:">
                            <i class="ion ion-md-menu text-large align-middle"></i>
                        </a>
                    </div>

                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#layout-navbar-collapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <hr class="d-lg-none w-100 my-2" />

<div class="navbar-nav align-items-lg-center">

    <label class="nav-item navbar-text navbar-search-box p-0 active">
        <i class="feather icon-search navbar-icon align-middle"></i>
        <span class="navbar-search-input pl-2">
          <input type="text" class="form-control navbar-text mx-2" placeholder="Search..." />
            </span>
        </label>
</div>

<div class="navbar-nav align-items-lg-center ml-auto">
    <div class="demo-navbar-notifications nav-item dropdown mr-lg-3">
        <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
            <i class="feather icon-bell navbar-icon align-middle"></i>
            <span class="badge badge-danger badge-dot indicator"></span>
            <span class="d-lg-none align-middle">&nbsp; Notifications</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <div class="bg-primary text-center text-white font-weight-bold p-3">
                4 New Notifications
            </div>
            <div class="list-group list-group-flush">
                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <div class="ui-icon ui-icon-sm feather icon-home bg-secondary border-0 text-white"></div>
                    <div class="media-body line-height-condenced ml-3">
                        <div class="text-dark">Login from 192.168.1.1</div>
                        <div class="text-light small mt-1">
                            Aliquam ex eros, imperdiet vulputate hendrerit et.
                        </div>
                        <div class="text-light small mt-1">12h ago</div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <div class="ui-icon ui-icon-sm feather icon-user-plus bg-info border-0 text-white"></div>
                    <div class="media-body line-height-condenced ml-3">
                        <div class="text-dark">You have
                            <strong>4</strong> new followers</div>
                        <div class="text-light small mt-1">
                            Phasellus nunc nisl, posuere cursus pretium nec, dictum vehicula tellus.
                        </div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <div class="ui-icon ui-icon-sm feather icon-power bg-danger border-0 text-white"></div>
                    <div class="media-body line-height-condenced ml-3">
                        <div class="text-dark">Server restarted</div>
                        <div class="text-light small mt-1">
                            19h ago
                        </div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <div class="ui-icon ui-icon-sm feather icon-alert-triangle bg-warning border-0 text-dark"></div>
                    <div class="media-body line-height-condenced ml-3">
                        <div class="text-dark">99% server load</div>
                        <div class="text-light small mt-1">
                            Etiam nec fringilla magna. Donec mi metus.
                        </div>
                        <div class="text-light small mt-1">
                            20h ago
                        </div>
                    </div>
                </a>
            </div>
            <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all notifications</a>
        </div>
    </div>

    <div class="demo-navbar-messages nav-item dropdown mr-lg-3">
        <a class="nav-link dropdown-toggle hide-arrow" href="#" data-toggle="dropdown">
            <i class="feather icon-mail navbar-icon align-middle"></i>
            <span class="badge badge-success badge-dot indicator"></span>
            <span class="d-lg-none align-middle">&nbsp; Messages</span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <div class="bg-primary text-center text-white font-weight-bold p-3">
                4 New Messages
            </div>
            <div class="list-group list-group-flush">
                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <img src="assets/img/avatars/6-small.png" class="d-block ui-w-40 rounded-circle" alt />
                    <div class="media-body ml-3">
                        <div class="text-dark line-height-condenced">Lorem ipsum dolor consectetuer elit.</div>
                        <div class="text-light small mt-1">
                            Josephin Doe &nbsp;·&nbsp; 58m ago
                        </div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <img src="assets/img/avatars/4-small.png" class="d-block ui-w-40 rounded-circle" alt />
                    <div class="media-body ml-3">
                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet, consectetuer.</div>
                        <div class="text-light small mt-1">
                            Lary Doe &nbsp;·&nbsp; 1h ago
                        </div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <img src="assets/img/avatars/5-small.png" class="d-block ui-w-40 rounded-circle" alt />
                    <div class="media-body ml-3">
                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet elit.</div>
                        <div class="text-light small mt-1">
                            Alice &nbsp;·&nbsp; 2h ago
                        </div>
                    </div>
                </a>

                <a href="javascript:" class="list-group-item list-group-item-action media d-flex align-items-center">
                    <img src="assets/img/avatars/11-small.png" class="d-block ui-w-40 rounded-circle" alt />
                    <div class="media-body ml-3">
                        <div class="text-dark line-height-condenced">Lorem ipsum dolor sit amet consectetuer amet elit dolor sit.</div>
                        <div class="text-light small mt-1">
                            Suzen &nbsp;·&nbsp; 5h ago
                        </div>
                    </div>
                </a>
            </div>

            <a href="javascript:" class="d-block text-center text-light small p-2 my-1">Show all messages</a>
        </div>
    </div>

    
    <div class="nav-item d-none d-lg-block text-big font-weight-light line-height-1 opacity-25 mr-3 ml-1">|</div>
        <div class="demo-navbar-user nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown">
            <span class="d-inline-flex flex-lg-row-reverse align-items-center align-middle">
                <img src="assets/img/avatars/1.png" alt class="d-block ui-w-30 rounded-circle" />
                <span class="px-1 mr-lg-2 ml-2 ml-lg-0">Cindy Deitch</span>
            </span>
        </a>
        <div class="dropdown-menu dropdown-menu-right">
            <a href="javascript:" class="dropdown-item">
                <i class="feather icon-user text-muted"></i> &nbsp; My profile</a>
            <a href="javascript:" class="dropdown-item">
                <i class="feather icon-mail text-muted"></i> &nbsp; Messages</a>
            <a href="javascript:" class="dropdown-item">
                <i class="feather icon-settings text-muted"></i> &nbsp; Account settings</a>
            <div class="dropdown-divider"></div>
            <a href="javascript:" class="dropdown-item">
                <i class="feather icon-power text-danger"></i> &nbsp; Log Out</a>
        </div>
    </div>
</div>
                     
                </nav>

            
        </div>

        )
    }
}

export default Up
