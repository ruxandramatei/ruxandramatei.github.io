(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatHeaderWrapper {\n    height: 90px;\n    color: #222;\n    box-shadow: 0 2px 3px rgba(0,0,0,0.37), 1px 2px 3px rgba(0,0,0,0.54);\n    z-index: 2;\n}\n\n.chatRoom {\n    height: 100%;\n    display: flex;\n    flex-direction: column;\n}\n\nrouter-outlet {\n    height:0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osV0FBVztJQUNYLG9FQUFvRTtJQUNwRSxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLFFBQVE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNoYXRIZWFkZXJXcmFwcGVyIHtcbiAgICBoZWlnaHQ6IDkwcHg7XG4gICAgY29sb3I6ICMyMjI7XG4gICAgYm94LXNoYWRvdzogMCAycHggM3B4IHJnYmEoMCwwLDAsMC4zNyksIDFweCAycHggM3B4IHJnYmEoMCwwLDAsMC41NCk7XG4gICAgei1pbmRleDogMjtcbn1cblxuLmNoYXRSb29tIHtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG5yb3V0ZXItb3V0bGV0IHtcbiAgICBoZWlnaHQ6MDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"chatRoom\">\n  <div class=\"chatHeaderWrapper\">\n    <app-navbar></app-navbar>\n  </div>\n\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Chat';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angularfire2 */ "./node_modules/angularfire2/index.js");
/* harmony import */ var angularfire2__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(angularfire2__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chat-form/chat-form.component */ "./src/app/chat-form/chat-form.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _feed_feed_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./feed/feed.component */ "./src/app/feed/feed.component.ts");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./message/message.component */ "./src/app/message/message.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./user-list/user-list.component */ "./src/app/user-list/user-list.component.ts");
/* harmony import */ var _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./user-item/user-item.component */ "./src/app/user-item/user-item.component.ts");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./routes */ "./src/app/routes.ts");
/* harmony import */ var src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/environments/environment.prod */ "./src/environments/environment.prod.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./services/auto-logout.service */ "./src/app/services/auto-logout.service.ts");


























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _chat_form_chat_form_component__WEBPACK_IMPORTED_MODULE_9__["ChatFormComponent"],
                _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_10__["ChatroomComponent"],
                _feed_feed_component__WEBPACK_IMPORTED_MODULE_11__["FeedComponent"],
                _message_message_component__WEBPACK_IMPORTED_MODULE_12__["MessageComponent"],
                _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_13__["LoginFormComponent"],
                _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_14__["SignupFormComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _user_list_user_list_component__WEBPACK_IMPORTED_MODULE_16__["UserListComponent"],
                _user_item_user_item_component__WEBPACK_IMPORTED_MODULE_17__["UserItemComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_22__["ProfileComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_20__["routes"]),
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"], angularfire2_database__WEBPACK_IMPORTED_MODULE_6__["AngularFireDatabaseModule"], angularfire2_auth__WEBPACK_IMPORTED_MODULE_7__["AngularFireAuthModule"],
                angularfire2__WEBPACK_IMPORTED_MODULE_5__["AngularFireModule"].initializeApp(src_environments_environment_prod__WEBPACK_IMPORTED_MODULE_21__["environment"].firebase),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_24__["BrowserAnimationsModule"]
            ],
            providers: [_services_auth_service__WEBPACK_IMPORTED_MODULE_19__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_18__["ChatService"], angularfire2_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorage"], _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_25__["AutoLogoutService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chat-form/chat-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".chatInput{\n    flex: 10;\n    font-size: 1.3em;\n    font-family: 'Open Sans', sans-serif;\n    background-color: #eee;\n    color: #000;\n    transition: 0.1s ease-out;\n    padding-left: 80px;\n}\n\n.chatInput:focus{\n    background-color: #E4F1FE;\n    color: #222;\n    transition: 0.2s ease-in;\n}\n\n.btn{\n    height: 54px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n    width: 18%;\n    align-self: auto;\n  }\n\n#btn-signUp{\n    background-color:#2A2845;\n}\n\n.chatButton:hover{\n    background-color: #444;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdC1mb3JtL2NoYXQtZm9ybS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixvQ0FBb0M7SUFDcEMsc0JBQXNCO0lBQ3RCLFdBQVc7SUFDWCx5QkFBeUI7SUFDekIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx3QkFBd0I7QUFDNUI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGtFQUFrRTtJQUNsRSx3QkFBd0I7SUFDeEIsVUFBVTtJQUNWLGdCQUFnQjtFQUNsQjs7QUFFQTtJQUNFLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NoYXQtZm9ybS9jaGF0LWZvcm0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jaGF0SW5wdXR7XG4gICAgZmxleDogMTA7XG4gICAgZm9udC1zaXplOiAxLjNlbTtcbiAgICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICBjb2xvcjogIzAwMDtcbiAgICB0cmFuc2l0aW9uOiAwLjFzIGVhc2Utb3V0O1xuICAgIHBhZGRpbmctbGVmdDogODBweDtcbn1cblxuLmNoYXRJbnB1dDpmb2N1c3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRGMUZFO1xuICAgIGNvbG9yOiAjMjIyO1xuICAgIHRyYW5zaXRpb246IDAuMnMgZWFzZS1pbjtcbn1cblxuLmJ0bntcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgd2lkdGg6IDE4JTtcbiAgICBhbGlnbi1zZWxmOiBhdXRvO1xuICB9XG5cbiAgI2J0bi1zaWduVXB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xufVxuXG4uY2hhdEJ1dHRvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.html":
/*!****************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"chatInput\" [(ngModel)]=\"message\" (keydown)=\"handleSubmit($event)\" />\n\n<button class=\"btn\" id=\"btn-signUp\" (click)=send()>Send</button>\n\n<!-- <button type=\"submit\" \nclass=\"btn\" id=\"btn-signUp\" (click) = \"goBack()\" routerLink=\"/chat\">\nGo Back\n</button> -->"

/***/ }),

/***/ "./src/app/chat-form/chat-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/chat-form/chat-form.component.ts ***!
  \**************************************************/
/*! exports provided: ChatFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatFormComponent", function() { return ChatFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatFormComponent = /** @class */ (function () {
    function ChatFormComponent(chat) {
        this.chat = chat;
    }
    ChatFormComponent.prototype.ngOnInit = function () {
    };
    ChatFormComponent.prototype.send = function () {
        this.chat.sendMessage(this.message);
        this.message = "";
    };
    ChatFormComponent.prototype.handleSubmit = function (event) {
        if (event.keyCode === 13) {
            this.send();
        }
    };
    ChatFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat-form',
            template: __webpack_require__(/*! ./chat-form.component.html */ "./src/app/chat-form/chat-form.component.html"),
            styles: [__webpack_require__(/*! ./chat-form.component.css */ "./src/app/chat-form/chat-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatFormComponent);
    return ChatFormComponent;
}());



/***/ }),

/***/ "./src/app/chatroom/chatroom.component.css":
/*!*************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mainContent{\n    display: flex;\n}\n\n.userListWrapper {\n    background-color: #2A2845;\n    color: #fff;\n    display: flex;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    flex: 1;\n    order: 1;\n    padding:20px 0px 40px 30px;\n    border-right: 1px solid #222;\n}\n\n.feedWrapper {\n    background-color: #fff;\n    background: \n        linear-gradient(181deg, rgba(100,200,255,0.6), rgba(0, 0, 0, 0.9)),\n        url('chat-bg-1.jpg') center center no-repeat;;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 1.2em;\n    flex: 5;\n    order: 2;\n    overflow-y: scroll;\n    padding:20px 0px 0px 24px;\n}\n\n.chatFormWrapper {\n    display: flex;\n    height: 50px;\n    background-color: #eee;\n    z-index: 3;\n}\n\n#scroll-style::-webkit-scrollbar-track\n{\n\tborder-radius: 10px;\n\tbackground-color: #F5F5F5;\n}\n\napp-user-list {\n    width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhdHJvb20vY2hhdHJvb20uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGFBQWE7SUFDYixvQ0FBb0M7SUFDcEMsZ0JBQWdCO0lBQ2hCLE9BQU87SUFDUCxRQUFRO0lBQ1IsMEJBQTBCO0lBQzFCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0Qjs7b0RBRWlFO0lBQ2pFLG9DQUFvQztJQUNwQyxnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFFBQVE7SUFDUixrQkFBa0I7SUFDbEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsVUFBVTtBQUNkOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQix5QkFBeUI7QUFDMUI7O0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jaGF0cm9vbS9jaGF0cm9vbS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5Db250ZW50e1xuICAgIGRpc3BsYXk6IGZsZXg7XG59XG5cbi51c2VyTGlzdFdyYXBwZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyQTI4NDU7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmb250LWZhbWlseTogXCJPcGVuIFNhbnNcIiwgc2Fucy1zZXJpZjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZsZXg6IDE7XG4gICAgb3JkZXI6IDE7XG4gICAgcGFkZGluZzoyMHB4IDBweCA0MHB4IDMwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgIzIyMjtcbn1cblxuLmZlZWRXcmFwcGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgIGJhY2tncm91bmQ6IFxuICAgICAgICBsaW5lYXItZ3JhZGllbnQoMTgxZGVnLCByZ2JhKDEwMCwyMDAsMjU1LDAuNiksIHJnYmEoMCwgMCwgMCwgMC45KSksXG4gICAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9jaGF0LWJnLTEuanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7O1xuICAgIGZvbnQtZmFtaWx5OiBcIk9wZW4gU2Fuc1wiLCBzYW5zLXNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZmxleDogNTtcbiAgICBvcmRlcjogMjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgcGFkZGluZzoyMHB4IDBweCAwcHggMjRweDtcbn1cblxuLmNoYXRGb3JtV3JhcHBlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBoZWlnaHQ6IDUwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcbiAgICB6LWluZGV4OiAzO1xufVxuXG4jc2Nyb2xsLXN0eWxlOjotd2Via2l0LXNjcm9sbGJhci10cmFja1xue1xuXHRib3JkZXItcmFkaXVzOiAxMHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjRjVGNUY1O1xufVxuXG5hcHAtdXNlci1saXN0IHtcbiAgICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.html":
/*!**************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mainContent\">\n  <div class=\"userListWrapper\">\n    <app-user-list></app-user-list>\n  </div>\n  <div #scroller class=\"feedWrapper\">\n    <app-feed></app-feed>\n  </div>\n</div>\n\n<div class=\"chatFormWrapper\">\n  <app-chat-form></app-chat-form>\n</div>"

/***/ }),

/***/ "./src/app/chatroom/chatroom.component.ts":
/*!************************************************!*\
  !*** ./src/app/chatroom/chatroom.component.ts ***!
  \************************************************/
/*! exports provided: ChatroomComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatroomComponent", function() { return ChatroomComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var ChatroomComponent = /** @class */ (function () {
    function ChatroomComponent(chat) {
        this.chat = chat;
    }
    ChatroomComponent.prototype.ngOnInit = function () {
    };
    ChatroomComponent.prototype.scrollToBottom = function () {
        this.feedContainer.nativeElement.scrollTop
            = this.feedContainer.nativeElement.scrollHeight;
    };
    ChatroomComponent.prototype.ngAfterViewChecked = function () {
        this.scrollToBottom();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])("scroller"),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ChatroomComponent.prototype, "feedContainer", void 0);
    ChatroomComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chatroom',
            template: __webpack_require__(/*! ./chatroom.component.html */ "./src/app/chatroom/chatroom.component.html"),
            styles: [__webpack_require__(/*! ./chatroom.component.css */ "./src/app/chatroom/chatroom.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], ChatroomComponent);
    return ChatroomComponent;
}());



/***/ }),

/***/ "./src/app/feed/feed.component.css":
/*!*****************************************!*\
  !*** ./src/app/feed/feed.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".feed{\n    display: flex;\n    flex-direction: column;\n}\n\n.message{\n    flex-direction: column;\n    margin: 10px 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZC9mZWVkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9mZWVkL2ZlZWQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mZWVke1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm1lc3NhZ2V7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDEwcHggMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/feed/feed.component.html":
/*!******************************************!*\
  !*** ./src/app/feed/feed.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"feed\">\n    <div *ngFor=\"let message of feed | async\" class = \"message\">\n      <app-message [chatMessage] = message></app-message>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/feed/feed.component.ts":
/*!****************************************!*\
  !*** ./src/app/feed/feed.component.ts ***!
  \****************************************/
/*! exports provided: FeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedComponent", function() { return FeedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var FeedComponent = /** @class */ (function () {
    function FeedComponent(chat) {
        this.chat = chat;
    }
    FeedComponent.prototype.ngOnInit = function () {
        console.log("CALLED FEED COMPONENT");
        this.feed = this.chat.getMessages().valueChanges();
        this.feed.subscribe();
    };
    FeedComponent.prototype.ngOnChanges = function () {
        this.feed = this.chat.getMessages().valueChanges();
        this.feed.subscribe();
    };
    FeedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-feed',
            template: __webpack_require__(/*! ./feed.component.html */ "./src/app/feed/feed.component.html"),
            styles: [__webpack_require__(/*! ./feed.component.css */ "./src/app/feed/feed.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], FeedComponent);
    return FeedComponent;
}());



/***/ }),

/***/ "./src/app/login-form/login-form.component.css":
/*!*****************************************************!*\
  !*** ./src/app/login-form/login-form.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    height: 100%;\n    overflow:hidden;\n    background: \n      linear-gradient(45deg, rgba(255,103,0,0.3), rgba(0, 0, 80, 0.9)),\n      url('login-3.jpg') center center no-repeat;;\n  }\n  \n  .loginCard{\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: 420px;\n    margin: auto;\n    margin-top: 40px;\n    text-align: center;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: hidden;\n  }\n  \n  .formInput{\n    margin: auto;\n    margin-top: 16px;\n    display: block;\n    width: 60%;\n    height: 40px;\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n  }\n  \n  .btn{\n    height: 54px;\n    width: 60%;\n    margin: auto;\n    margin-top: 16px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n  }\n  \n  #btn-signUp{\n      background-color:#2A2845;\n  }\n  \n  #btn-signUp:hover{\n      background-color:#4A4865;\n      transition: ease-in 0.2s;\n  }\n  \n  #btn-login{\n      background-color:#4A4875;\n  }\n  \n  #btn-login:hover{\n      background-color:#5A5895;\n      transition: ease-in 0.2s;\n  }\n  \n  h2{\n      height: 2em;\n  }\n  \n  a {\n      text-decoration: none;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osZUFBZTtJQUNmOztnREFFNkQ7RUFDL0Q7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLFVBQVU7SUFDVixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIsWUFBWTtJQUNaLGFBQWE7RUFDZjs7RUFFQTtJQUNFLFlBQVk7SUFDWixVQUFVO0lBQ1YsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLHdCQUF3QjtFQUMxQjs7RUFFQTtNQUNJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHdCQUF3QjtNQUN4Qix3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0ksV0FBVztFQUNmOztFQUVBO01BQ0kscUJBQXFCO0VBQ3pCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4tZm9ybS9sb2dpbi1mb3JtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVye1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZDogXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMjU1LDEwMywwLDAuMyksIHJnYmEoMCwgMCwgODAsIDAuOSkpLFxuICAgICAgdXJsKCcuLi8uLi9hc3NldHMvaW1nL2xvZ2luLTMuanBnJykgY2VudGVyIGNlbnRlciBuby1yZXBlYXQ7O1xuICB9XG4gIFxuICAubG9naW5DYXJke1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LDI1NSwyNTUsMC44NSk7XG4gICAgd2lkdGg6IDcwMHB4O1xuICAgIGhlaWdodDogNDIwcHg7XG4gICAgbWFyZ2luOiBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDQwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHBhZGRpbmc6IDgwcHggMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgfVxuICBcbiAgLmZvcm1JbnB1dHtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB3aWR0aDogNjAlO1xuICAgIGhlaWdodDogNDBweDtcbiAgICBib3JkZXItcmFkaXVzOjRweDtcbiAgICBiYWNrZ3JvdW5kOiNlY2YwZjE7XG4gICAgYm9yZGVyOiAjY2NjIDFweCBzb2xpZDtcbiAgICBwYWRkaW5nOiA4cHg7XG4gICAgZm9udC1zaXplOjFlbTtcbiAgfVxuICBcbiAgLmJ0bntcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgfVxuICBcbiAgI2J0bi1zaWduVXB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiMyQTI4NDU7XG4gIH1cbiAgXG4gICNidG4tc2lnblVwOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEE0ODY1O1xuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICB9XG4gIFxuICAjYnRuLWxvZ2lue1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNEE0ODc1O1xuICB9XG4gIFxuICAjYnRuLWxvZ2luOmhvdmVye1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojNUE1ODk1O1xuICAgICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xuICB9XG4gIFxuICBoMntcbiAgICAgIGhlaWdodDogMmVtO1xuICB9XG4gIFxuICBhIHtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgfSJdfQ== */"

/***/ }),

/***/ "./src/app/login-form/login-form.component.html":
/*!******************************************************!*\
  !*** ./src/app/login-form/login-form.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"loginCard\">\n    <h2 class=\"heading\">Log In</h2>\n      <input \n        [(ngModel)]=\"email\"\n        type=\"email\" \n        name=\"email\" \n        class=\"formInput\" />\n      <input type=\"password\" \n        [(ngModel)]=\"password\"\n        name=\"password\" \n        class=\"formInput\" />\n      <button class=\"btn\" \n              id=\"btn-login\" \n              (click)=\"login()\">\n              Log In\n      </button>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/login-form/login-form.component.ts":
/*!****************************************************!*\
  !*** ./src/app/login-form/login-form.component.ts ***!
  \****************************************************/
/*! exports provided: LoginFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginFormComponent", function() { return LoginFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auto-logout.service */ "./src/app/services/auto-logout.service.ts");





var LoginFormComponent = /** @class */ (function () {
    function LoginFormComponent(authService, router, autoLogout) {
        this.authService = authService;
        this.router = router;
        this.autoLogout = autoLogout;
    }
    LoginFormComponent.prototype.login = function () {
        var _this = this;
        //console.log('login() called from login-form component');
        this.authService.login(this.email, this.password)
            .catch(function (error) { return _this.errorMsg = error.message; });
    };
    LoginFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login-form',
            template: __webpack_require__(/*! ./login-form.component.html */ "./src/app/login-form/login-form.component.html"),
            styles: [__webpack_require__(/*! ./login-form.component.css */ "./src/app/login-form/login-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_4__["AutoLogoutService"]])
    ], LoginFormComponent);
    return LoginFormComponent;
}());



/***/ }),

/***/ "./src/app/message/message.component.css":
/*!***********************************************!*\
  !*** ./src/app/message/message.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".messageContainer{\n    display: flex;\n    height: auto;\n    width: 70%;\n    min-width: 400px;\n    border-radius: 5px;\n    align-items:stretch;\n    background-color: #eee;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.26), 0 3px 6px rgba(0,0,0,0.23);\n}\n\n.isOwnMessageContainer{\n    background-color: #01579B;\n    height: auto;\n}\n\n.img-circle {\n    display: block;\n    height: 60px;\n    width: 60px;\n    border-radius: 50%;\n    background: none;\n}\n\n.messageData{\n    flex: 1;\n    padding: 10px;\n    font-size: 0.7em;\n    align-content: center;\n}\n\n.sender{\n    display: block;\n    color: #222;\n    font-weight: bold;\n    font-size: 16px;\n    margin-bottom: 2px;\n    height: 16px;\n}\n\n.isOwnSender{\n    color: #E1F5FE;\n}\n\n.timestamp {\n    color: #555;\n    font-style: italic;\n}\n\n.isOwnTimestamp{\n    color: #4FC3F7;\n}\n\n.messageContent{\n    height: auto;\n    flex: 9;\n    background-color: rgb(156, 145, 172);\n    padding: 10px;\n    border-top-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n    font: 20px;\n    margin-top: 0;\n}\n\n.isOwnMessageContent{\n    background-color: #E3F2FD;\n    color: #01579B;\n}\n\n.center {\n    margin: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    padding: 10px;\n  }\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVzc2FnZS9tZXNzYWdlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLFVBQVU7SUFDVixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsa0VBQWtFO0FBQ3RFOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsWUFBWTtJQUNaLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksT0FBTztJQUNQLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksWUFBWTtJQUNaLE9BQU87SUFDUCxvQ0FBb0M7SUFDcEMsYUFBYTtJQUNiLDRCQUE0QjtJQUM1QiwrQkFBK0I7SUFDL0IsVUFBVTtJQUNWLGFBQWE7QUFDakI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFlBQVk7SUFDWixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixhQUFhO0VBQ2YiLCJmaWxlIjoic3JjL2FwcC9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZXNzYWdlQ29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHdpZHRoOiA3MCU7XG4gICAgbWluLXdpZHRoOiA0MDBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgYWxpZ24taXRlbXM6c3RyZXRjaDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xuICAgIGJveC1zaGFkb3c6IDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjYpLCAwIDNweCA2cHggcmdiYSgwLDAsMCwwLjIzKTtcbn1cblxuLmlzT3duTWVzc2FnZUNvbnRhaW5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDE1NzlCO1xuICAgIGhlaWdodDogYXV0bztcbn1cblxuLmltZy1jaXJjbGUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGhlaWdodDogNjBweDtcbiAgICB3aWR0aDogNjBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbn1cblxuLm1lc3NhZ2VEYXRhe1xuICAgIGZsZXg6IDE7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBmb250LXNpemU6IDAuN2VtO1xuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLnNlbmRlcntcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBjb2xvcjogIzIyMjtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICAgIGhlaWdodDogMTZweDtcbn1cblxuLmlzT3duU2VuZGVye1xuICAgIGNvbG9yOiAjRTFGNUZFO1xufVxuXG4udGltZXN0YW1wIHtcbiAgICBjb2xvcjogIzU1NTtcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5pc093blRpbWVzdGFtcHtcbiAgICBjb2xvcjogIzRGQzNGNztcbn1cblxuLm1lc3NhZ2VDb250ZW50e1xuICAgIGhlaWdodDogYXV0bztcbiAgICBmbGV4OiA5O1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxNTYsIDE0NSwgMTcyKTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDVweDtcbiAgICBmb250OiAyMHB4O1xuICAgIG1hcmdpbi10b3A6IDA7XG59XG5cbi5pc093bk1lc3NhZ2VDb250ZW50e1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFM0YyRkQ7XG4gICAgY29sb3I6ICMwMTU3OUI7XG59XG5cbi5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgcGFkZGluZzogMTBweDtcbiAgfVxuXG4iXX0= */"

/***/ }),

/***/ "./src/app/message/message.component.html":
/*!************************************************!*\
  !*** ./src/app/message/message.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"messageContainer\" [ngClass]=\"{'isOwnMessageContainer': isOwnMessage}\">\n  <div>\n    <img [src]=\"this.photoUrl\" class=\"img-circle\">\n  </div>\n  <div class=\"messageData\" [ngClass]=\"{'isOwnMessageData': isOwnMessage}\">\n\n    <span class=\"timestamp\" [ngClass]=\"{'isOwnTimestamp': isOwnMessage}\">\n      {{ timeStamp }}\n    </span>\n  </div>\n  <div class=\"messageContent\" [ngClass]=\"{'isOwnMessageContent': isOwnMessage}\">\n    <span class=\"sender\" [ngClass]=\"{'isOwnMessageSender': isOwnMessage}\">\n      {{ userName }}\n    </span>\n    {{ messageContent }}\n  </div>\n\n</div>"

/***/ }),

/***/ "./src/app/message/message.component.ts":
/*!**********************************************!*\
  !*** ./src/app/message/message.component.ts ***!
  \**********************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _models_chat_message_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/chat-message.model */ "./src/app/models/chat-message.model.ts");





var MessageComponent = /** @class */ (function () {
    function MessageComponent(authService, chat) {
        var _this = this;
        this.authService = authService;
        this.chat = chat;
        authService.authUser().subscribe(function (user) {
            _this.ownEmail = user.email;
            _this.isOwnMessage = _this.ownEmail === _this.userEmail;
        });
    }
    MessageComponent.prototype.ngOnInit = function (chatMessage) {
        if (chatMessage === void 0) { chatMessage = this.chatMessage; }
        this.messageContent = chatMessage.message;
        this.userName = chatMessage.userName;
        this.userEmail = chatMessage.email;
        this.timeStamp = chatMessage.timeSent;
        this.photoUrl = chatMessage.photoUrl;
        if (this.chatMessage.email == this.chat.currentUserEmail) {
            this.userName = this.chat.currentUserName;
            this.photoUrl = this.chat.currentUserPhotoUrl;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_chat_message_model__WEBPACK_IMPORTED_MODULE_4__["ChatMessage"])
    ], MessageComponent.prototype, "chatMessage", void 0);
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"], _services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/models/chat-message.model.ts":
/*!**********************************************!*\
  !*** ./src/app/models/chat-message.model.ts ***!
  \**********************************************/
/*! exports provided: ChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatMessage", function() { return ChatMessage; });
var ChatMessage = /** @class */ (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());



/***/ }),

/***/ "./src/app/models/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/models/user.model.ts ***!
  \**************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navBar{\n    width: 100%;\n    display: flex;\n    flex-direction: row;\n    background-color: #EAEAEB;\n}\n\n#logo{\n    display: inline-block;\n    background: url('logo.png') no-repeat;\n    background-size: cover;\n    margin: 12px 10px 12px 32px;\n    width: 60px;\n    height: 60px;\n    min-width: 60px;\n}\n\n#heading{\n    flex: 4;\n    padding: 24px 0px 8px 10px;\n    height: 60px;\n    font-size: 1.8em;\n    font-weight: bold;\n}\n\n.links{\n    padding-top: 32px;\n    padding-right: 30px;\n    white-space: nowrap;\n    display: block;\n}\n\n#heading > a{\n    text-decoration: none;\n    color: black;\n}\n\n.links a{\n    color: #555;\n    text-decoration: none;\n    transition: ease-in 0.2s;\n    padding-right: 12px;\n    overflow: hidden;\n}\n\n.links a:hover {\n    color: #1E88E5;\n    transition: ease-in 0.2s;\n}\n\n#userEmail {\n    padding-right: 16px;\n    font-weight: bold;\n}\n\n.img-circle {\n    vertical-align: middle;\n    margin-bottom: 0.75em;\n    margin-right: 6px;\n    height: 30px;\n    width: 30px;\n    border-radius: 50%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLHFDQUFzRDtJQUN0RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLE9BQU87SUFDUCwwQkFBMEI7SUFDMUIsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLG1CQUFtQjtJQUNuQixjQUFjO0FBQ2xCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksY0FBYztJQUNkLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxzQkFBc0I7SUFDdEIscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztJQUNYLGtCQUFrQjtBQUN0QiIsImZpbGUiOiJzcmMvYXBwL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXZCYXJ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNFQUVBRUI7XG59XG5cbiNsb2dve1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9pbWcvbG9nby5wbmcnKSBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBtYXJnaW46IDEycHggMTBweCAxMnB4IDMycHg7XG4gICAgd2lkdGg6IDYwcHg7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIG1pbi13aWR0aDogNjBweDtcbn1cblxuI2hlYWRpbmd7XG4gICAgZmxleDogNDtcbiAgICBwYWRkaW5nOiAyNHB4IDBweCA4cHggMTBweDtcbiAgICBoZWlnaHQ6IDYwcHg7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbn1cblxuLmxpbmtze1xuICAgIHBhZGRpbmctdG9wOiAzMnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XG4gICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuI2hlYWRpbmcgPiBhe1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi5saW5rcyBhe1xuICAgIGNvbG9yOiAjNTU1O1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgcGFkZGluZy1yaWdodDogMTJweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xufVxuXG4ubGlua3MgYTpob3ZlciB7XG4gICAgY29sb3I6ICMxRTg4RTU7XG4gICAgdHJhbnNpdGlvbjogZWFzZS1pbiAwLjJzO1xufVxuXG4jdXNlckVtYWlsIHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uaW1nLWNpcmNsZSB7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiA2cHg7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHdpZHRoOiAzMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/navbar/navbar.component.html":
/*!**********************************************!*\
  !*** ./src/app/navbar/navbar.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navBar\">\n  <div id=\"logo\"></div>\n  <div id=\"heading\">\n    <a routerLink=\"/\">chat</a>\n  </div>\n  <div class=\"links\">\n    <span>\n      <a *ngIf=\"!(userTemp|async)?.uid\" href=\"#\" (click)=\"login()\">Login</a>\n    </span>\n\n    <span>\n      <a *ngIf=\"!(userTemp|async)?.uid\" routerLink=\"/signup\">Sign Up</a>\n    </span>\n\n    <span *ngIf=\"(userTemp|async)?.uid\">\n        <img [src]=\"this.userPhotoUrl \" class=\"img-circle\">\n  \n      </span>\n\n    <span>\n\n      <span id=\"userEmail\" *ngIf=\"(userTemp|async)?.uid\">Hello, {{username}}</span>\n    </span>\n\n    <span>\n      <a *ngIf=\"(userTemp|async)?.uid\" [routerLink]=\"['/chat']\">Chat Room</a>\n    </span>\n\n    <span>\n      <a *ngIf=\"(userTemp|async)?.uid\" [routerLink]=\"['/user', user.uid]\">Profile Settings</a>\n    </span>\n\n    <span>\n      <a *ngIf=\"(userTemp|async)?.uid\" href=\"#\" (click)=\"authService.logout()\">Logout</a>\n    </span>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__);





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService, afDb, afAuth) {
        var _this = this;
        this.authService = authService;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.userTemp = this.authService.authUser();
        this.userTemp.subscribe(function (user) {
            if (user) {
                _this.afAuth.authState.subscribe(function (auth) {
                    if (auth != undefined && auth != null) {
                        _this.user = auth;
                    }
                    _this.data = _this.getUserData().valueChanges();
                    _this.data.subscribe(function (user) {
                        _this.username = user.displayName;
                        _this.userPhotoUrl = user.photoUrl;
                    });
                });
            }
        });
    }
    NavbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userTemp = this.authService.authUser();
        this.userTemp.subscribe(function (user) {
            if (user) {
                _this.afAuth.authState.subscribe(function (auth) {
                    if (auth != undefined && auth != null) {
                        _this.user = auth;
                    }
                    _this.data = _this.getUserData().valueChanges();
                    _this.data.subscribe(function (user) {
                        _this.username = user.displayName;
                        _this.userPhotoUrl = user.photoUrl;
                    });
                });
            }
        });
    };
    NavbarComponent.prototype.getUserData = function () {
        var userID = this.user.uid;
        var path = "/users/" + userID;
        return this.afDb.object(path);
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], angularfire2_database__WEBPACK_IMPORTED_MODULE_3__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.css":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    overflow:hidden;\n    background: \n      linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\n      url('login-3.jpg') center center no-repeat;;\n      \n  }\n  \n  .signUpCard{\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: auto;\n    margin: auto;\n    margin-top: 30px;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: auto;\n  }\n  \n  .formInput{\n    display: block;\n    width: 100%;\n    height: 40px;\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n    margin-bottom: 18px;\n  }\n  \n  .img-circle {\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    height: 180px;\n    width: 180px;\n    border-radius: 50%;\n}\n  \n  .btn{\n    height: 54px;\n    margin-top: 32px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n    width: 49.6%;\n    align-self: auto;\n  }\n  \n  .btn-option{\n    height: 54px;\n    margin-top: 32px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n    width: 20%;\n    align-self: auto;\n  }\n  \n  .upload-btn-wrapper {\n    position: relative;\n    overflow: hidden;\n    display: inline-block;\n  }\n  \n  .upload-btn-wrapper input[type=file] {\n    font-size: 100px;\n    position: absolute;\n    left: auto;\n    top: auto;\n    opacity: 0;\n  }\n  \n  .divider{\n    width:5px;\n    height:auto;\n    display:inline-block;\n}\n  \n  #btn-signUp{\n      background-color:#2A2845;\n  }\n  \n  #btn-signUp:hover{\n      background-color:#4A4865;\n      transition: ease-in 0.2s;\n  }\n  \n  #btn-signUp:disabled{\n      background-color:#eee;\n      color: #999;\n  }\n  \n  h2{\n      text-align: center;\n      height: 2em;\n  }\n  \n  a {\n      text-decoration: none;\n  }\n  \n  .label{\n      font-size: 16px;\n  }\n  \n  .center {\n    margin: auto;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n    width: 27%;\n    padding: 10px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2Y7O2dEQUU4RDs7RUFFaEU7O0VBRUE7SUFDRSxjQUFjO0lBQ2Qsc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQix3Q0FBd0M7SUFDeEMsWUFBWTtJQUNaLFlBQVk7SUFDWixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsY0FBYztFQUNoQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFlBQVk7SUFDWixrQkFBa0I7QUFDdEI7O0VBRUU7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsd0JBQXdCO0lBQ3hCLFlBQVk7SUFDWixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixrRUFBa0U7SUFDbEUsd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixnQkFBZ0I7RUFDbEI7O0VBRUE7SUFDRSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHFCQUFxQjtFQUN2Qjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFNBQVM7SUFDVCxVQUFVO0VBQ1o7O0VBRUE7SUFDRSxTQUFTO0lBQ1QsV0FBVztJQUNYLG9CQUFvQjtBQUN4Qjs7RUFFRTtNQUNJLHdCQUF3QjtFQUM1Qjs7RUFFQTtNQUNJLHdCQUF3QjtNQUN4Qix3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSxxQkFBcUI7TUFDckIsV0FBVztFQUNmOztFQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFdBQVc7RUFDZjs7RUFFQTtNQUNJLHFCQUFxQjtFQUN6Qjs7RUFFQTtNQUNJLGVBQWU7RUFDbkI7O0VBRUE7SUFDRSxZQUFZO0lBQ1osY0FBYztJQUNkLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7RUFDZiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZDogXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMCwxMDMsIDI1NSwgMC4zKSwgcmdiYSgwLCAxNTAsIDgwLCAwLjkpKSxcbiAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi0zLmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0IDs7XG4gICAgICBcbiAgfVxuICBcbiAgLnNpZ25VcENhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIHBhZGRpbmc6IDgwcHggMzBweDtcbiAgICBib3gtc2hhZG93OiAwIDFweCAzcHggcmdiYSgwLDAsMCwwLjE3KSwgMCAxcHggMnB4IHJnYmEoMCwwLDAsMC4yNCk7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gIH1cbiAgXG4gIC5mb3JtSW5wdXR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcbiAgICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cblxuICAuaW1nLWNpcmNsZSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIGhlaWdodDogMTgwcHg7XG4gICAgd2lkdGg6IDE4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbiAgXG4gIC5idG57XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgd2lkdGg6IDQ5LjYlO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG4gIH1cblxuICAuYnRuLW9wdGlvbntcbiAgICBoZWlnaHQ6IDU0cHg7XG4gICAgbWFyZ2luLXRvcDogMzJweDtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDE1cHggMzJweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgICB3aWR0aDogMjAlO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG4gIH1cblxuICAudXBsb2FkLWJ0bi13cmFwcGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIH1cbiAgXG4gIC51cGxvYWQtYnRuLXdyYXBwZXIgaW5wdXRbdHlwZT1maWxlXSB7XG4gICAgZm9udC1zaXplOiAxMDBweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbGVmdDogYXV0bztcbiAgICB0b3A6IGF1dG87XG4gICAgb3BhY2l0eTogMDtcbiAgfVxuXG4gIC5kaXZpZGVye1xuICAgIHdpZHRoOjVweDtcbiAgICBoZWlnaHQ6YXV0bztcbiAgICBkaXNwbGF5OmlubGluZS1ibG9jaztcbn1cbiAgXG4gICNidG4tc2lnblVwe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xuICB9XG4gIFxuICAjYnRuLXNpZ25VcDpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzRBNDg2NTtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgfVxuICBcbiAgI2J0bi1zaWduVXA6ZGlzYWJsZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgaDJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgfVxuICBcbiAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgfVxuXG4gIC5jZW50ZXIge1xuICAgIG1hcmdpbjogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgd2lkdGg6IDI3JTtcbiAgICBwYWRkaW5nOiAxMHB4O1xuICB9Il19 */"

/***/ }),

/***/ "./src/app/profile/profile.component.html":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\n<div class=\"container\">\n  <div class=\"signUpCard\">\n\n    <form #profileSettingsForm=\"ngForm\">\n      <h2 class=\"heading\">Profile Settings</h2>\n    \n      <div class=\"form-group\">\n        <h5>Select image:</h5>\n        <input #imageLoaded type=\"file\" accept=\".png, .jpg\" (change)=\"onUpload($event)\">\n      </div>\n      <input #imageUser type=\"hidden\" [value]=\"urlImage | async\">\n      <div>\n        <img [src]=\"this.photoUrl \" class=\"img-circle\">\n      </div>\n\n      <label class=\"label\">Display Name</label>\n      <input name=\"displayName\" value = {{this.username}} (keyup)=\"onKey($event)\"\n          [(ngModel)]=\"displayName\" class=\"formInput\" maxlength=\"12\" />\n\n      <label class=\"label\">New password</label>\n      <input type=\"password\" name=\"newPassword\"  \n          [(ngModel)]=\"newPassword\" class=\"formInput\" required/>\n  \n      <label class=\"label\">Confirm new password</label>\n      <input type=\"password\" name=\"confirmPassword\"  \n          [(ngModel)]=\"confirmPassword\" class=\"formInput\" required/>\n\n      <label class=\"label\">Old password</label>\n      <input type=\"password\" name=\"oldPassword\"\n          [(ngModel)]=\"oldPassword\" class=\"formInput\" required/>\n    </form>\n    \n    <button type=\"submit\" \n      class=\"btn\" id=\"btn-signUp\" (click) = \"goBack()\" routerLink=\"/chat\">\n      Go Back\n    </button>\n\n    <div class=\"divider\"></div>\n\n    <input type=\"submit\" name=\"Save Changes\" value=\"Save Changes\" [disabled]=\"!profileSettingsForm.form.valid\" \n      class=\"btn\" id=\"btn-signUp\" \n      (click) = \"saveChanges()\" onclick=\"this.disabled=true; this.value='Changes saved';\" />\n\n    <!-- <input type=\"submit\" name=\"Submit\" value=\"Submit\" onclick=\"this.disabled=true; this.value='Please Wait...';\" /> -->\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase */ "./node_modules/firebase/dist/index.cjs.js");
/* harmony import */ var firebase__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularfire2/storage */ "./node_modules/angularfire2/storage/index.js");
/* harmony import */ var angularfire2_storage__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(afDb, afAuth, router, afStorage) {
        var _this = this;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.router = router;
        this.afStorage = afStorage;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != undefined && auth != null) {
                _this.user = auth;
            }
            _this.data = _this.getUserData().valueChanges();
            _this.data.subscribe(function (user) {
                _this.username = user.displayName;
                _this.displayName = user.displayName;
                _this.email = user.email;
                _this.photoUrl = user.photoUrl;
                _this.oldPhotoUrl = user.photoUrl;
                _this.oldFilePath = null;
            });
            _this.disabledSaveButton = false;
        });
    }
    ProfileComponent.prototype.goBack = function () {
        if (this.oldFilePath != null) {
            this.afStorage.ref(this.oldFilePath).delete().toPromise().catch(function (error) { return console.log(error); });
        }
        this.disabledSaveButton = false;
    };
    ProfileComponent.prototype.ngOnInit = function () {
    };
    ProfileComponent.prototype.onUpload = function (e) {
        var _this = this;
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = function (event) {
                _this.photoUrl = event.target.result;
            };
            reader.readAsDataURL(e.target.files[0]);
        }
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var id = Math.random().toString(36).substring(2);
                var file = e.target.files[0];
                var filePath = "uploads/profile_" + res.uid + "_" + id;
                _this.oldFilePath = filePath;
                var ref_1 = _this.afStorage.ref(filePath);
                var task = _this.afStorage.upload(filePath, file);
                task.percentageChanges();
                task.snapshotChanges().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["finalize"])(function () {
                    _this.urlImage = ref_1.getDownloadURL();
                })).subscribe();
            }
        });
    };
    ProfileComponent.prototype.getUserData = function () {
        var userID = this.user.uid;
        var path = "/users/" + userID;
        return this.afDb.object(path);
    };
    ProfileComponent.prototype.onKey = function (event) {
        this.displayName = event.target.value;
    };
    ProfileComponent.prototype.updateProfilePicture = function () {
        var _this = this;
        if (this.inputImageUser.nativeElement.value != "") {
            this.afAuth.authState.subscribe(function (res) {
                if (res && res.uid) {
                    var path = "users/" + res.uid;
                    var data = {
                        photoUrl: _this.inputImageUser.nativeElement.value
                    };
                    _this.afDb.object(path).update(data)
                        .catch(function (error) { return console.log(error); });
                    // this.chatMessages = this.afDb.list("messages", ref => ref.orderByKey().limitToLast(25))
                    // this.chatMessages.snapshotChanges().subscribe(messages => {
                    //   messages.forEach(message => {
                    //     this.chatMessages.update(`${message.key}`, data);
                    //   })
                    // })
                }
            });
        }
    };
    ProfileComponent.prototype.saveChanges = function () {
        var _this = this;
        //this.validForm = false;
        if (this.newPassword == this.confirmPassword) {
            this.afAuth.auth.currentUser.reauthenticateWithCredential(firebase__WEBPACK_IMPORTED_MODULE_4__["auth"].EmailAuthProvider.credential(this.email, this.oldPassword)).then(function (resolve) {
                _this.updateProfilePicture();
                _this.afAuth.auth.currentUser.updatePassword(_this.newPassword).then(function (resolve) {
                    _this.afAuth.authState.subscribe(function (res) {
                        if (res && res.uid) {
                            var path = "users/" + res.uid;
                            var data = {
                                displayName: _this.displayName
                            };
                            _this.afDb.object(path).update(data)
                                .catch(function (error) { return console.log(error); });
                        }
                    });
                });
            });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('imageUser'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ProfileComponent.prototype, "inputImageUser", void 0);
    ProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-profile',
            template: __webpack_require__(/*! ./profile.component.html */ "./src/app/profile/profile.component.html"),
            styles: [__webpack_require__(/*! ./profile.component.css */ "./src/app/profile/profile.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            angularfire2_storage__WEBPACK_IMPORTED_MODULE_6__["AngularFireStorage"]])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/routes.ts":
/*!***************************!*\
  !*** ./src/app/routes.ts ***!
  \***************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./signup-form/signup-form.component */ "./src/app/signup-form/signup-form.component.ts");
/* harmony import */ var _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login-form/login-form.component */ "./src/app/login-form/login-form.component.ts");
/* harmony import */ var _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chatroom/chatroom.component */ "./src/app/chatroom/chatroom.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");




var routes = [
    { path: "signup", component: _signup_form_signup_form_component__WEBPACK_IMPORTED_MODULE_0__["SignupFormComponent"] },
    { path: "login", component: _login_form_login_form_component__WEBPACK_IMPORTED_MODULE_1__["LoginFormComponent"] },
    { path: "chat", component: _chatroom_chatroom_component__WEBPACK_IMPORTED_MODULE_2__["ChatroomComponent"] },
    { path: "user/:id", component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] },
    { path: "", redirectTo: "/login", pathMatch: "full" },
];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_4__);





var AuthService = /** @class */ (function () {
    function AuthService(afAuth, afDb, router) {
        this.afAuth = afAuth;
        this.afDb = afDb;
        this.router = router;
        this.user = afAuth.authState;
    }
    AuthService.prototype.authUser = function () {
        return this.user;
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        return this.afAuth.auth.signInWithEmailAndPassword(email, password)
            .then(function (resolve) {
            var status = 'online';
            _this.setUserStatus(status);
            _this.router.navigate(["chat"]);
        });
    };
    AuthService.prototype.logout = function () {
        console.log("called logout");
        var status = 'offline';
        this.setUserStatus(status);
        this.afAuth.auth.signOut();
        //this.router.navigate(['login']);
    };
    AuthService.prototype.signUp = function (email, password, displayName) {
        var _this = this;
        return this.afAuth.auth.createUserWithEmailAndPassword(email, password)
            .then(function (user) {
            _this.authState = user;
            var status = 'online';
            var photoUrl = '';
            _this.setUserData(email, displayName, status, photoUrl);
        })
            .catch(function (error) { return console.log(error); });
    };
    AuthService.prototype.setUserData = function (email, displayName, status, photoUrl) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var path = "users/" + res.uid;
                var data = {
                    email: email,
                    displayName: displayName,
                    status: status,
                    photoUrl: photoUrl
                };
                _this.afDb.object(path).update(data)
                    .catch(function (error) { return console.log(error); });
            }
        });
    };
    AuthService.prototype.setUserStatus = function (status) {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                var path = "users/" + res.uid;
                var data = {
                    status: status
                };
                _this.afDb.object(path).update(data)
                    .catch(function (error) { return console.log(error); });
            }
        });
    };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            angularfire2_database__WEBPACK_IMPORTED_MODULE_4__["AngularFireDatabase"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/auto-logout.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/auto-logout.service.ts ***!
  \*************************************************/
/*! exports provided: AutoLogoutService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AutoLogoutService", function() { return AutoLogoutService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var store = __webpack_require__(/*! store */ "./node_modules/store/dist/store.legacy.js");
var MINUTES_UNITL_AUTO_LOGOUT = 10; // in mins
var CHECK_INTERVAL = 1000; // in ms
var STORE_KEY = 'lastAction';
var AutoLogoutService = /** @class */ (function () {
    function AutoLogoutService(afAuth, auth, router) {
        this.afAuth = afAuth;
        this.auth = auth;
        this.router = router;
        this.check();
        this.doCheck = true;
        this.initListener();
        this.initInterval();
    }
    Object.defineProperty(AutoLogoutService.prototype, "lastAction", {
        get: function () {
            return parseInt(store.get(STORE_KEY));
        },
        set: function (value) {
            store.set(STORE_KEY, value);
        },
        enumerable: true,
        configurable: true
    });
    AutoLogoutService.prototype.initListener = function () {
        var _this = this;
        document.body.addEventListener('click', function () { return _this.reset(); });
    };
    AutoLogoutService.prototype.reset = function () {
        this.lastAction = Date.now();
    };
    AutoLogoutService.prototype.initInterval = function () {
        var _this = this;
        if (this.doCheck == true) {
            setInterval(function () {
                _this.check();
            }, CHECK_INTERVAL);
        }
    };
    AutoLogoutService.prototype.check = function () {
        var _this = this;
        this.afAuth.authState.subscribe(function (res) {
            if (res && res.uid) {
                console.log('check');
                var now = Date.now();
                var timeleft = _this.lastAction + MINUTES_UNITL_AUTO_LOGOUT * 60 * 1000;
                var diff = timeleft - now;
                var isTimeout = diff < 0;
                if (isTimeout) {
                    _this.router.navigateByUrl("/login").then(function () {
                        _this.doCheck = false;
                        _this.auth.logout();
                    });
                }
            }
        });
    };
    AutoLogoutService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], AutoLogoutService);
    return AutoLogoutService;
}());



/***/ }),

/***/ "./src/app/services/chat.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/chat.service.ts ***!
  \******************************************/
/*! exports provided: ChatService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatService", function() { return ChatService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularfire2/database */ "./node_modules/angularfire2/database/index.js");
/* harmony import */ var angularfire2_database__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angularfire2_database__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! angularfire2/auth */ "./node_modules/angularfire2/auth/index.js");
/* harmony import */ var angularfire2_auth__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__);




var ChatService = /** @class */ (function () {
    function ChatService(afDb, afAuth) {
        var _this = this;
        this.afDb = afDb;
        this.afAuth = afAuth;
        this.afAuth.authState.subscribe(function (auth) {
            if (auth != undefined && auth != null) {
                _this.user = auth;
            }
            _this.data = _this.getUser().valueChanges();
            _this.data.subscribe(function (user) {
                _this.username = user.displayName;
                _this.photourl = user.photoUrl;
                if (_this.user.email == user.email) {
                    _this.currentUserName = user.displayName;
                    _this.currentUserPhotoUrl = user.photoUrl;
                    _this.currentUserEmail = user.email;
                }
            });
        });
    }
    ChatService.prototype.getUser = function () {
        var userID = this.user.uid;
        var path = "/users/" + userID;
        return this.afDb.object(path);
    };
    ChatService.prototype.getUsers = function () {
        var path = "/users";
        return this.afDb.list(path);
    };
    ChatService.prototype.sendMessage = function (msg) {
        var timeStamp;
        timeStamp = this.getTimeStamp();
        var email = this.user.email;
        this.chatMessages = this.getMessages();
        this.chatMessages.push({
            message: msg, email: email, timeSent: timeStamp,
            userName: this.username, photoUrl: this.photourl
        });
    };
    ChatService.prototype.getMessages = function () {
        return this.afDb.list("messages", function (ref) { return ref.orderByKey().limitToLast(25); });
    };
    ChatService.prototype.getTimeStamp = function () {
        var now = new Date();
        var date = now.getUTCFullYear() + '/' +
            (now.getUTCMonth() + 1) + '/' +
            now.getUTCDate();
        var time = now.getUTCHours() + ':' +
            now.getUTCMinutes() + ':' +
            now.getUTCSeconds();
        return date + ' ' + time;
    };
    ChatService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [angularfire2_database__WEBPACK_IMPORTED_MODULE_2__["AngularFireDatabase"],
            angularfire2_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], ChatService);
    return ChatService;
}());



/***/ }),

/***/ "./src/app/signup-form/signup-form.component.css":
/*!*******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container{\n    overflow:hidden;\n    background: \n      linear-gradient(45deg, rgba(0,103, 255, 0.3), rgba(0, 150, 80, 0.9)),\n      url('login-3.jpg') center center no-repeat;;\n  }\n  \n  .signUpCard{\n    display: block;\n    border: 1px solid #000;\n    border-radius: 4px;\n    background-color: rgba(255,255,255,0.85);\n    width: 700px;\n    height: 520px;\n    margin: auto;\n    margin-top: 30px;\n    padding: 80px 30px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    overflow: hidden;\n  }\n  \n  .formInput{\n    display: block;\n    width: 100%;\n    height: 40px;\n    border-radius:4px;\n    background:#ecf0f1;\n    border: #ccc 1px solid;\n    padding: 8px;\n    font-size:1em;\n    margin-bottom: 18px;\n  }\n  \n  .btn{\n    height: 54px;\n    margin-top: 32px;\n    border: none;\n    color: white;\n    padding: 15px 32px;\n    text-align: center;\n    text-decoration: none;\n    font-size: 16px;\n    border-radius: 4px;\n    box-shadow: 0 1px 3px rgba(0,0,0,0.17), 0 1px 2px rgba(0,0,0,0.24);\n    transition: ease-in 0.2s;\n    width: 100%;\n  }\n  \n  #btn-signUp{\n      background-color:#2A2845;\n  }\n  \n  #btn-signUp:hover{\n      background-color:#4A4865;\n      transition: ease-in 0.2s;\n  }\n  \n  #btn-signUp:disabled{\n      background-color:#eee;\n      color: #999;\n  }\n  \n  h2{\n      text-align: center;\n      height: 2em;\n  }\n  \n  a {\n      text-decoration: none;\n  }\n  \n  .label{\n      font-size: 0.9em;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwLWZvcm0vc2lnbnVwLWZvcm0uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZjs7Z0RBRTZEO0VBQy9EOztFQUVBO0lBQ0UsY0FBYztJQUNkLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsd0NBQXdDO0lBQ3hDLFlBQVk7SUFDWixhQUFhO0lBQ2IsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLGdCQUFnQjtFQUNsQjs7RUFFQTtJQUNFLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2IsbUJBQW1CO0VBQ3JCOztFQUVBO0lBQ0UsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsa0VBQWtFO0lBQ2xFLHdCQUF3QjtJQUN4QixXQUFXO0VBQ2I7O0VBRUE7TUFDSSx3QkFBd0I7RUFDNUI7O0VBRUE7TUFDSSx3QkFBd0I7TUFDeEIsd0JBQXdCO0VBQzVCOztFQUVBO01BQ0kscUJBQXFCO01BQ3JCLFdBQVc7RUFDZjs7RUFFQTtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO0VBQ2Y7O0VBRUE7TUFDSSxxQkFBcUI7RUFDekI7O0VBRUE7TUFDSSxnQkFBZ0I7RUFDcEIiLCJmaWxlIjoic3JjL2FwcC9zaWdudXAtZm9ybS9zaWdudXAtZm9ybS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lcntcbiAgICBvdmVyZmxvdzpoaWRkZW47XG4gICAgYmFja2dyb3VuZDogXG4gICAgICBsaW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoMCwxMDMsIDI1NSwgMC4zKSwgcmdiYSgwLCAxNTAsIDgwLCAwLjkpKSxcbiAgICAgIHVybCgnLi4vLi4vYXNzZXRzL2ltZy9sb2dpbi0zLmpwZycpIGNlbnRlciBjZW50ZXIgbm8tcmVwZWF0OztcbiAgfVxuICBcbiAgLnNpZ25VcENhcmR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwLjg1KTtcbiAgICB3aWR0aDogNzAwcHg7XG4gICAgaGVpZ2h0OiA1MjBweDtcbiAgICBtYXJnaW46IGF1dG87XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBwYWRkaW5nOiA4MHB4IDMwcHg7XG4gICAgYm94LXNoYWRvdzogMCAxcHggM3B4IHJnYmEoMCwwLDAsMC4xNyksIDAgMXB4IDJweCByZ2JhKDAsMCwwLDAuMjQpO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gIH1cbiAgXG4gIC5mb3JtSW5wdXR7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA0MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6NHB4O1xuICAgIGJhY2tncm91bmQ6I2VjZjBmMTtcbiAgICBib3JkZXI6ICNjY2MgMXB4IHNvbGlkO1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBmb250LXNpemU6MWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDE4cHg7XG4gIH1cbiAgXG4gIC5idG57XG4gICAgaGVpZ2h0OiA1NHB4O1xuICAgIG1hcmdpbi10b3A6IDMycHg7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBwYWRkaW5nOiAxNXB4IDMycHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBmb250LXNpemU6IDE2cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMXB4IDNweCByZ2JhKDAsMCwwLDAuMTcpLCAwIDFweCAycHggcmdiYSgwLDAsMCwwLjI0KTtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgXG4gICNidG4tc2lnblVwe1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjojMkEyODQ1O1xuICB9XG4gIFxuICAjYnRuLXNpZ25VcDpob3ZlcntcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IzRBNDg2NTtcbiAgICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4ycztcbiAgfVxuICBcbiAgI2J0bi1zaWduVXA6ZGlzYWJsZWR7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWU7XG4gICAgICBjb2xvcjogIzk5OTtcbiAgfVxuICBcbiAgaDJ7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBoZWlnaHQ6IDJlbTtcbiAgfVxuICBcbiAgYSB7XG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIH1cbiAgXG4gIC5sYWJlbHtcbiAgICAgIGZvbnQtc2l6ZTogMC45ZW07XG4gIH0iXX0= */"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.html":
/*!********************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"signUpCard\">\n    <form #signupForm=\"ngForm\">\n      <h2 class=\"heading\">Sign Up</h2>\n\n      <label class=\"label\">Email</label>\n        <input \n          type=\"email\" name=\"email\" \n          placeholder=\"Enter your email address\"\n          [(ngModel)]=\"email\" class=\"formInput\"\n          maxlength=\"60\" required/>\n\n          <label class=\"label\">Password</label>\n          <input \n            type=\"password\" name=\"password\" \n            placeholder=\"Choose a password\"\n            [(ngModel)]=\"password\" class=\"formInput\"\n            required/>\n\n        <label class=\"label\">Display Name</label>\n          <input \n            name=\"displayName\" \n            placeholder=\"Enter a display name\"\n            [(ngModel)]=\"displayName\" class=\"formInput\"\n            maxlength=\"12\" required/>\n\n        <button [disabled]=\"!signupForm.form.valid\"\n                type=\"submit\" (click)=\"signUp()\"\n                class=\"btn\" id=\"btn-signUp\">\n                Sign Up\n        </button>\n    </form> \n  </div>\n </div>"

/***/ }),

/***/ "./src/app/signup-form/signup-form.component.ts":
/*!******************************************************!*\
  !*** ./src/app/signup-form/signup-form.component.ts ***!
  \******************************************************/
/*! exports provided: SignupFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupFormComponent", function() { return SignupFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/auto-logout.service */ "./src/app/services/auto-logout.service.ts");





var SignupFormComponent = /** @class */ (function () {
    function SignupFormComponent(authService, router, autoLogout) {
        this.authService = authService;
        this.router = router;
        this.autoLogout = autoLogout;
    }
    SignupFormComponent.prototype.signUp = function () {
        var _this = this;
        var email = this.email;
        var password = this.password;
        var displayName = this.displayName;
        this.authService.signUp(email, password, displayName)
            .then(function (resolve) { return _this.router.navigate(['chat']); })
            .catch(function (error) { return _this.errorMsg = error; });
    };
    SignupFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup-form',
            template: __webpack_require__(/*! ./signup-form.component.html */ "./src/app/signup-form/signup-form.component.html"),
            styles: [__webpack_require__(/*! ./signup-form.component.css */ "./src/app/signup-form/signup-form.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _services_auto_logout_service__WEBPACK_IMPORTED_MODULE_4__["AutoLogoutService"]])
    ], SignupFormComponent);
    return SignupFormComponent;
}());



/***/ }),

/***/ "./src/app/user-item/user-item.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-item/user-item.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".userItem{\n    height: auto;\n    padding: 10px;\n    width: 90%;\n    margin-top: 10px;\n    border-radius: 1px;\n    align-items:flex-start;\n    background-color: #201835;\n    box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);\n    color: #A098A5;\n    border-radius: 8px;\n    transition: ease-in 0.2s;\n}\n\n.userItem:hover{\n    background-color: #453968;\n    color: #ddd;\n    transition: ease-in 0.1s;\n}\n\n.online{\n    background-color: #0FA;\n}\n\n.busy{\n    background-color: #FB0;\n}\n\n.offline{\n    background-color: #888;\n}\n\n.status{\n    border: 1px solid black;\n    display: inline-block;\n    min-width: 10px;\n    min-height: 10px;\n    border-radius: 50%;\n    margin: 10px 12px 0px 10px;\n}\n\n.userName{\n    display: inline-block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXNlci1pdGVtL3VzZXItaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLGFBQWE7SUFDYixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtFQUFrRTtJQUNsRSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHdCQUF3QjtBQUM1Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsd0JBQXdCO0FBQzVCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHFCQUFxQjtJQUNyQixlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxxQkFBcUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC91c2VyLWl0ZW0vdXNlci1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudXNlckl0ZW17XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgd2lkdGg6IDkwJTtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDFweDtcbiAgICBhbGlnbi1pdGVtczpmbGV4LXN0YXJ0O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMDE4MzU7XG4gICAgYm94LXNoYWRvdzogMCAzcHggNnB4IHJnYmEoMCwwLDAsMC4xNiksIDAgM3B4IDZweCByZ2JhKDAsMCwwLDAuMjMpO1xuICAgIGNvbG9yOiAjQTA5OEE1O1xuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgICB0cmFuc2l0aW9uOiBlYXNlLWluIDAuMnM7XG59XG5cbi51c2VySXRlbTpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDUzOTY4O1xuICAgIGNvbG9yOiAjZGRkO1xuICAgIHRyYW5zaXRpb246IGVhc2UtaW4gMC4xcztcbn1cblxuLm9ubGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMEZBO1xufVxuXG4uYnVzeXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkIwO1xufVxuXG4ub2ZmbGluZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjODg4O1xufVxuXG4uc3RhdHVze1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBtaW4td2lkdGg6IDEwcHg7XG4gICAgbWluLWhlaWdodDogMTBweDtcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgbWFyZ2luOiAxMHB4IDEycHggMHB4IDEwcHg7XG59XG5cbi51c2VyTmFtZXtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59Il19 */"

/***/ }),

/***/ "./src/app/user-item/user-item.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-item/user-item.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"userItem\">\n  <span class=\"status\" [ngClass]=(user.status)></span>\n  <span class=\"userName\">\n    {{userNameInput}}\n  </span>\n</div>\n"

/***/ }),

/***/ "./src/app/user-item/user-item.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-item/user-item.component.ts ***!
  \**************************************************/
/*! exports provided: UserItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserItemComponent", function() { return UserItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/user.model */ "./src/app/models/user.model.ts");



var UserItemComponent = /** @class */ (function () {
    function UserItemComponent() {
    }
    UserItemComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _models_user_model__WEBPACK_IMPORTED_MODULE_2__["User"])
    ], UserItemComponent.prototype, "user", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserItemComponent.prototype, "userNameInput", void 0);
    UserItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-item',
            template: __webpack_require__(/*! ./user-item.component.html */ "./src/app/user-item/user-item.component.html"),
            styles: [__webpack_require__(/*! ./user-item.component.css */ "./src/app/user-item/user-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserItemComponent);
    return UserItemComponent;
}());



/***/ }),

/***/ "./src/app/user-list/user-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/user-list/user-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXItbGlzdC91c2VyLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/user-list/user-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/user-list/user-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <ng-container *ngFor=\"let user of users\">\n    <app-user-item [user]=user [userNameInput] = user.displayName *ngIf = \"user.status==='online'\">\n    </app-user-item>\n  </ng-container>\n</div>\n"

/***/ }),

/***/ "./src/app/user-list/user-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/user-list/user-list.component.ts ***!
  \**************************************************/
/*! exports provided: UserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserListComponent", function() { return UserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/chat.service */ "./src/app/services/chat.service.ts");



var UserListComponent = /** @class */ (function () {
    function UserListComponent(chat) {
        var _this = this;
        this.temp = chat.getUsers().valueChanges();
        this.temp.subscribe(function (users) {
            _this.users = users;
        });
    }
    UserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-list',
            template: __webpack_require__(/*! ./user-list.component.html */ "./src/app/user-list/user-list.component.html"),
            styles: [__webpack_require__(/*! ./user-list.component.css */ "./src/app/user-list/user-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_chat_service__WEBPACK_IMPORTED_MODULE_2__["ChatService"]])
    ], UserListComponent);
    return UserListComponent;
}());



/***/ }),

/***/ "./src/environments/environment.prod.ts":
/*!**********************************************!*\
  !*** ./src/environments/environment.prod.ts ***!
  \**********************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: true,
    firebase: {
        apiKey: "AIzaSyD-ecshH3B6_EIlpzmoMPRDeSWX1mG08jA",
        authDomain: "chat-app-97175.firebaseapp.com",
        databaseURL: "https://chat-app-97175.firebaseio.com",
        projectId: "chat-app-97175",
        storageBucket: "chat-app-97175.appspot.com",
        messagingSenderId: "81824069891"
    }
};


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyD-ecshH3B6_EIlpzmoMPRDeSWX1mG08jA",
        authDomain: "chat-app-97175.firebaseapp.com",
        databaseURL: "https://chat-app-97175.firebaseio.com",
        projectId: "chat-app-97175",
        storageBucket: "chat-app-97175.appspot.com",
        messagingSenderId: "81824069891"
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/ruxandra/Documents/chat-app/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map