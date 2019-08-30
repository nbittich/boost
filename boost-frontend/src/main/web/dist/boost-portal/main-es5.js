(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n<main role=\"main\" class=\"flex-shrink-0 mt-lg-5 \">\n  <div class=\"routerContent\">\n    <router-outlet></router-outlet>\n  </div>\n</main>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/audio-player/audio-player.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/audio-player/audio-player.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"form-group mr-2\" *ngIf=\"showPlayer && upload\">\n  <a [routerLink]=\"linkDetail\"  *ngIf=\"showTitle\" class=\"badge label text-link text-muted text-warning text-uppercase mr-2 \">{{title}}</a>\n  <audio  #audioSource [id]=\"upload.id+currentPlayer\" (playing)=\"propagatePlayingEvent($event)\"(pause)=\"propagatePauseEvent($event)\" controls [ngClass]=\"'bg-transparent pr-3  text-muted' + width? 'w-'+width : ''\">\n    <source [src]=\"getSource()\"  >\n  </audio>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/book-form/book-form.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/book-form/book-form.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <button class=\"border-radius-0 no-focus  btn btn-outline-primary mb-2\" (click)=\"toggleFormVisible()\"\n          *ngIf=\"!formVisible\"><fa-icon [icon]=\"faPlus\"></fa-icon> </button>\n  <div class=\"row\" *ngIf=\"formVisible\" >\n    <div class=\"card border-0 w-100 \">\n      <div class=\"card-header bg-white text-secondary\">\n        <span class=\"text-uppercase\"># {{bookCopy.id ? bookCopy.id : 'New'}}</span>\n        <div class=\"float-right\" *ngIf=\"showCross\">\n          <a class=\"clickable btn-link text-secondary\" (click)=\"toggleFormVisible()\"><fa-icon [icon]=\"faTimes\" ></fa-icon> </a>\n        </div>\n      </div>\n      <div class=\"card-body\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-4\">\n              <app-image-preview [defaultImage]=\"bookCopy.cover ? bookCopy.cover.id: null\" (emitter)=\"setCover($event)\"></app-image-preview>\n            </div>\n            <div class=\"col-lg-8 text-uppercase\">\n              <div class=\"form-group\">\n                <label for=\"bookTitle\">Title</label>\n                <input [disabled]=\"saving\" type=\"text\" class=\"form-control\" id=\"bookTitle\" [(ngModel)]=\"bookCopy.title\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"bookAuthor\">Author</label>\n                <input [disabled]=\"saving\" type=\"text\" class=\"form-control\" id=\"bookAuthor\" [(ngModel)]=\"bookCopy.author\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"bookCategory\">Category</label>\n                <input [disabled]=\"saving\" type=\"text\" class=\"form-control\" id=\"bookCategory\" [(ngModel)]=\"bookCopy.category\">\n              </div>\n              <div class=\"form-group\">\n                <label for=\"bookDescription\">Description</label>\n                <textarea [disabled]=\"saving\" autosize class=\"form-control \" id=\"bookDescription\" [(ngModel)]=\"bookCopy.description\"></textarea>\n              </div>\n              <div class=\"form-group\">\n                <datalist id=\"listCc\"  *ngIf=\"countryCode\">\n                  <select class=\"form-control\" >\n                    <option *ngFor=\"let cc of countryCode\" [value]=\"cc.key\">{{cc.value}}</option>\n                  </select>\n                </datalist>\n                <label for=\"bookLang\">lang</label>\n                <div class=\"ingput-group\">\n                  <input list=\"listCc\" id=\"bookLang\" [disabled]=\"saving\" type=\"text\" class=\"form-control form-inline\" [(ngModel)]=\"bookCopy.lang\">\n                  <span  [ngClass]=\"'col-1 flag-icon flag-icon-'+bookCopy.lang\"></span>\n                </div>\n              </div>\n              <div class=\"form-group\">\n                <label for=\"bookPublished\">Published</label>\n                <input type=\"checkbox\"  class=\"form-check\" id=\"bookPublished\" [disabled]=\"saving\" [(ngModel)]=\"bookCopy.published\">\n              </div>\n\n              <button [disabled]=\"!bookCopy.title || !bookCopy.author || !bookCopy.category || saving\" (click)=\"saveBookToDB($event)\" class=\"btn btn-outline-primary btn-sm float-right text-uppercase\"><fa-icon [icon]=\"faSave\"></fa-icon>&nbsp;{{savingButton}}</button>\n            </div>\n            <div class=\"container\">\n              <hr>\n              <app-chapters [editMode]=\"editMode\" *ngIf=\"bookCopy && bookCopy.id\" [bookId]=\"bookCopy.id\"></app-chapters>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/books-detail/books-detail.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books-detail/books-detail.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logo [headerClass]=\"'text-center  mt-5  pt-5 '\"></app-logo>\n\n<div class=\"container mb-4\">\n  <div class=\"text-center mb-2\">\n    <div class=\" btn-group mt-5  \">\n      <button class=\"btn  btn-outline-info  text-uppercase\" (click)=\"back()\"><fa-icon [icon]=\"faArrowLeft\"></fa-icon></button>\n      <button [id]=\"book && book.id + 'editaction'\" *ngIf=\"hasAnyRole('USER','CONTRIBUTOR','ADMIN') && hasRight() && !editMode\" (click)=\"navigate(book,'edit')\" class=\"btn  btn-outline-success\"\n              aria-label=\"Edit\"><fa-icon [icon]=\"['fas','edit']\"></fa-icon></button>\n      <button [id]=\"book && book.id + 'viewaction'\" *ngIf=\"hasAnyRole('USER','CONTRIBUTOR','ADMIN') && editMode\" (click)=\"navigate(book,'view')\" class=\"btn  btn-outline-primary\"\n              aria-label=\"View\"><fa-icon [icon]=\"['fas','eye']\"></fa-icon></button>\n    </div>\n  </div>\n  <div class=\"card border-0 \" *ngIf=\"book && !editMode\">\n    <div class=\"card-body \">\n      <div class=\"container \">\n        <div class=\"row\">\n          <div class=\"col-lg-4 \">\n            <app-image-loader  *ngIf=\"book.cover\" [imageId]=\"book.cover.id\"></app-image-loader>\n          </div>\n          <div class=\"col-lg-8\">\n          <span class=\"lead\" >\n            <span [ngClass]=\"'flag-icon flag-icon-'+ book.lang\" *ngIf=\"book.lang\"></span>\n            {{book.title}}<small class=\"text-muted\"> by {{book.author}}</small>\n          </span>\n            <p>{{book.description}}</p>\n              <app-stars [editable]=\"isLoggedIn() && !editMode\" [star]=\"book.stars\" (updateStar)=\"rateBook($event)\"></app-stars>\n              <app-chapters *ngIf=\"book\" [bookId]=\"book.id\"></app-chapters>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-12 float-right\">\n        </div>\n      </div>\n\n    </div>\n  </div>\n    <app-book-form [showCross]=\"false\" *ngIf=\"editMode && book\" [editMode]=\"editMode\" [formVisible]=\"true\" [book]=\"book\"></app-book-form>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/books/books.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/books/books.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!books || books.empty\" class=\"mt-lg-5 pt-lg-5 \"></div>\n<div *ngIf=\"!books || books.empty\" class=\"mt-lg-5 pt-lg-5 \"></div>\n<app-logo [headerClass]=\"'text-center  mt-5  pt-5 '\"></app-logo>\n<div class=\"container mt-5\">\n  <datalist id=\"listTitles\"  *ngIf=\"titles\">\n    <select class=\"form-control\" >\n      <option *ngFor=\"let title of titles\" [value]=\"title.title\"></option>\n    </select>\n  </datalist>\n  <div [class]=\"'input-group text-center '\">\n      <input  list=\"listTitles\" [(ngModel)]=\"searchText\" (ngModelChange)=\"searchBookByTitle(searchText,1)\" type=\"text\"  [class]=\"'col-lg-5 ml-auto form-control border-right-0 border-secondary'\" placeholder=\"Search...\">\n\n      <button [disabled]=\"loading || !searchText\" (click)=\"searchBookByTitle(searchText)\" class=\"btn no-focus btn-outline-secondary   text-center mb-2 border-radius-0\"><fa-icon [icon]=\"['fas','search']\" ></fa-icon>{{books && books.content ? ' ('+books.totalElements+')' : ''}}</button>\n\n    <div  [ngClass]=\"'btn-group mr-auto'\">\n      <button *ngIf=\"isLoggedIn()\"  [disabled]=\"loading\" (click)=\"getBooks(1)\" class=\"btn border-radius-0 no-focus btn-outline-secondary border-left-0  mb-2  \"><fa-icon [icon]=\"faSync\" ></fa-icon></button>\n    </div>\n\n  </div>\n  <div class=\" table-responsive mt-2 \" *ngIf=\"books &&!books.empty\">\n    <table class=\"table table-hover table-light table-sm\">\n      <thead>\n      <tr class=\"bg-light\">\n        <th scope=\"col\">\n          <small>{{'title' | uppercase }}</small>\n        </th>\n        <th scope=\"col\">\n          <small>{{'category' | uppercase }}</small>\n        </th>\n        <th scope=\"col\">\n          <small>{{'Duration' | uppercase }}</small>\n        </th>\n        <th scope=\"col\">\n          <small>{{'Lang' | uppercase }}</small>\n        </th>\n      </tr>\n      </thead>\n      <tbody *ngIf=\"books && !books.empty\">\n      <tr class=\"clickable\" (click)=\"navigate(book,'view')\" *ngFor=\"let book of books.content | paginate: { itemsPerPage: books.size, currentPage: books.number+1, totalItems: books.totalElements}\">\n        <td>{{book.title}}</td>\n        <td>{{book.category}}</td>\n        <td>{{getTotalDuration(book)}}</td>\n        <td><span [ngClass]=\"'flag-icon flag-icon-'+ (book.lang ? book.lang.toLowerCase() : 'us')\"></span></td>\n\n      </tr>\n      </tbody>\n      <tbody *ngIf=\"!books || books.empty \">\n      <tr class=\"bg-dark\">\n        <td colspan=\"11\" class=\"text-white text-uppercase text-center\"><strong>No result!</strong></td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n  <div *ngIf=\"books && !books.empty && books.totalPages  > 1\"\n       class=\"text-center container mt-2 mr-1 mb-3 pb-1 \">\n    <div class=\"text-wrap\">\n      <pagination-controls (pageChange)=\"getBooks($event)\"\n                           previousLabel=\"\"\n                           autoHide=\"true\"\n                           class=\"my-pagination \"\n                           nextLabel=\"\">\n      </pagination-controls>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chapter-detail/chapter-detail.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chapter-detail/chapter-detail.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"d-flex flex-column \" *ngIf=\"chapter\">\n  <div  (click)=\"toggleTitle()\" *ngIf=\"!editTitle \" [ngClass]=\"'dotted mb-2 badge p-2 text-left ' + (isChecked() ? 'badge-primary':'badge-secondary')\">\n    <span>{{chapter.order}}. {{chapter.title}}</span>\n    <span class=\"dots\"></span>\n    <span>{{getTimeDuration(chapter)}}</span>\n  </div>\n  <div *ngIf=\"editTitle\" class=\"input-group input-group-sm mb-2\">\n    <input #title [autofocus]=\"true\" (focusout)=\"toggleTitle()\" type=\"text\" [(ngModel)]=\"chapter.title\" (keydown.enter)=\"updateChapter($event,'editTitle')\" class=\"form-control\">\n    <div class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"toggleTitle()\"><fa-icon [icon]=\"faTimes\"></fa-icon></button>\n    </div>\n  </div>\n  <div *ngIf=\"editDescription\" class=\"input-group input-group-sm mb-2\">\n    <textarea #description [autofocus]=\"true\"  autosize class=\"form-control\" [(ngModel)]=\"chapter.description\"></textarea>\n    <div class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"updateChapter($event, 'editDescription')\"><fa-icon [icon]=\"faSave\"></fa-icon></button>\n    </div>\n  <div class=\"input-group-append\">\n      <button type=\"button\" class=\"btn btn-sm btn-danger\" (click)=\"toggleDescription()\"><fa-icon [icon]=\"faTimes\"></fa-icon></button>\n    </div>\n  </div>\n  <blockquote *ngIf=\"!editDescription\" (click)=\"toggleDescription()\" class=\"bg-light blockquote\"><cite>{{chapter.description ? chapter.description : 'No description for this chapter'}}</cite></blockquote>\n</div>\n\n<div class=\"form-group text-center\">\n  <app-audio-player width=\"100\" [title]=\"chapter.title\"  [showTitle]=\"false\" [upload]=\"chapter.upload\"></app-audio-player>\n  <div class=\"float-right \" *ngIf=\"isLoggedIn()\">\n    <label class=\"form-check-label text-uppercase text-success mr-2\" [htmlFor]=\"'currentChap'+ chapter.id\">set as Current track</label>\n    <input  [id]=\"'currentChap'+chapter.id\" type=\"checkbox\" class=\"form-check-inline\"  [disabled]=\"isChecked()\" [checked]=\"isChecked()\" (change)=\"updateCurrentChapter($event)\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chapter-form/chapter-form.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chapter-form/chapter-form.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\">\n  <button class=\"btn btn-primary btn-block text-uppercase\" (click)=\"formVisible=!formVisible\"\n          *ngIf=\"!formVisible\"><fa-icon [icon]=\"faPlus\"></fa-icon>&nbsp;New Track</button>\n  <div class=\"card\" *ngIf=\"editMode && formVisible\">\n    <div class=\"card-header bg-white\">\n      <span class=\"lead text-uppercase\">New Track</span>\n      <div class=\"float-right\">\n        <a class=\"text-link text-muted\" href=\"#\" (click)=\"formVisible=false\"><fa-icon [icon]=\"faTimes\"></fa-icon></a>\n      </div>\n    </div>\n    <div class=\"card-body text-uppercase\">\n      <div class=\"form-group\">\n        <label for=\"newChapTitle\">Title</label>\n        <input [disabled]=\"loadingNewFile\" name=\"newChapTitle\" class=\"form-control\" type=\"text\" id=\"newChapTitle\"\n               [(ngModel)]=\"newChapter.title\">\n      </div>\n\n      <div class=\"form-group\">\n        <label for=\"newChapDescription\">Description</label>\n        <textarea [disabled]=\"loadingNewFile\" autosize class=\"form-control \" id=\"newChapDescription\" [(ngModel)]=\"newChapter.description\"></textarea>\n      </div>\n\n      <div class=\"custom-file\">\n        <input [autofocus]=\"false\" #fileRef [disabled]=\"loadingNewFile\" name=\"custom-file-input\" id=\"inputGroupFile01\"\n               aria-describedby=\"inputGroupFileAddon01\" type=\"file\" class=\" shadow-none custom-file-input\"\n               (change)=\"setNewChapterFile($event.target.files)\">\n        <label class=\"custom-file-label  shadow-none\"\n               for=\"inputGroupFile01\">{{newChapter.fileName ? newChapter.fileName : 'Choose file'}}</label>\n      </div>\n    </div>\n    <div class=\"card-footer bg-transparent\">\n      <button type=\"submit\" id=\"newCHAPSubmit\" [disabled]=\"loadingNewFile\" (click)=\"publishNewChapter($event)\"\n              class=\"btn btn-sm btn-outline-success mt-2 text-uppercase float-right\"><fa-icon [icon]=\"faSave\"></fa-icon>&nbsp;Save\n      </button>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/chapters/chapters.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/chapters/chapters.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"col-12 mb-1\">\n    <app-chapter-form *ngIf=\"editMode\" [editMode]=\"editMode\" [bookId]=\"bookId\" (emitter)=\"refreshChapterList($event)\"></app-chapter-form>\n  </div>\n    <ul class=\"list-group\" *ngIf=\"chapters\">\n      <li class=\"list-group-item d-flex justify-content-between align-items-center text-uppercase disabled border-right-0  border-left-0\" aria-disabled=\"true\">\n        Track{{chapters.totalElements > 1 ? 's':''}}\n        <h3><span class=\"badge badge-secondary badge-pill lead\">{{chapters.totalElements}}</span></h3>\n      </li>\n      <li *ngFor=\"let ch of chapters.content | paginate: { itemsPerPage: chapters.size, currentPage: chapters.number+1, totalItems: chapters.totalElements}\"  class=\"list-group-item border-0\">\n        <app-chapter-detail [editMode]=\"editMode\" [id]=\"ch.id\" [chapter]=\"ch\"></app-chapter-detail>\n        <div class=\"clearfix\"></div>\n        <div class=\"col-12 mt-2\">\n          <button class=\"btn btn-sm btn-outline-danger text-uppercase  float-right\" (click)=\"deleteChapter(ch)\" *ngIf=\"editMode\">\n            <fa-icon [icon]=\"faTrash\"></fa-icon>&nbsp;Remove\n          </button>\n        </div>\n      </li>\n    </ul>\n\n\n  <div *ngIf=\"chapters && !chapters.empty && chapters.totalPages  > 1\"\n       class=\"text-center container mt-2 mr-1 mb-3 pb-1 \">\n    <div class=\"text-wrap\">\n      <pagination-controls (pageChange)=\"getChapters($event)\"\n                           previousLabel=\"\"\n                           autoHide=\"true\"\n                           class=\"my-pagination \"\n                           nextLabel=\"\">\n      </pagination-controls>\n    </div>\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/error/error.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <div class=\"jumbotron container bg-transparent \">\n      <div class=\"mb-0\">\n        <div class=\"text-center container\">\n          <h1 class=\"display-4 text-danger \">{{status}} </h1>\n          <p class=\"lead text-danger\">{{label}}</p>\n          <p class=\"lead\">{{message}}</p>\n        </div>\n      </div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/home/home.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logo [headerClass]=\"'text-center  mt-5  pt-5 '\"></app-logo>\n<div class=\"container  text-center\">\n    <button class=\"btn btn-lg border-0 btn-outline-primary\" routerLink=\"/books\"><fa-icon class=\"fa-2x\" [icon]=\"['fas','search']\"></fa-icon></button>\n    <hr class=\"my-4\">\n    <p *ngIf=\"!isLoggedIn()\">You're not logged in.</p>\n    <div *ngIf=\"isLoggedIn()\">\n      <p>Welcome {{getUser().username}}!</p>\n      <p>Your access roles are: <span class=\"badge badge-info mr-1\" *ngFor=\"let role of getUser().authorities\">{{role.authority}}</span></p>\n    </div>\n\n    <!-- history -->\n    <div *ngIf=\"isLoggedIn() && histories && histories.length\" class=\"container text-center\">\n      <h2 class=\"text-muted bg-light mt-2 text-uppercase\">Your History</h2>\n      <div class=\"mb-2 p-2 row \">\n        <div *ngFor=\"let history of histories\" class=\"col-lg-4 \">\n          <div class=\"card bg-light\" >\n            <div class=\"card-body border-0 bg-transparent  \">\n              <app-audio-player [linkDetail]=\"getChapterDetailLink(history.chapter)\" [updateCurrentTimeUrl]=\"getUpdateCurrentTimeUrl(history)\" [currentTime]=\"history.currentTime\" [title]=\"history.chapter.title\" [upload]=\"history.chapter.upload\"></app-audio-player>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <!-- last -->\n    <div *ngIf=\"books\" class=\"container text-center\">\n      <h2 class=\"text-muted bg-light mt-2 text-uppercase\">Latest</h2>\n      <div class=\"row mb-2 p-2\">\n        <div *ngFor=\"let book of books\" class=\"col-lg-4\">\n          <div class=\"card\" >\n            <app-image-loader [routerLink]=\"getBookDetailLink(book)\" [customClass]=\"'clickable card-img-top '\" *ngIf=\"book.cover\" [imageId]=\"book.cover.id\"></app-image-loader>\n            <div class=\"card-body border-0 bg-transparent\">\n              <h6 class=\"card-title font-italic\">{{book.title}}</h6>\n              <span class=\"card-text \">   {{ (book.description && book.description.length>100)? (book.description | slice:0:100)+'...':(book.description ? book.description : 'No description available') }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- top 3 -->\n\n    <div *ngIf=\"topBooks\" class=\"container text-center\">\n      <h2 class=\"text-muted bg-light mt-2 text-uppercase\">TOP</h2>\n      <div class=\"row mb-2 p-2\">\n        <div *ngFor=\"let book of topBooks\" class=\"col-lg-4 \">\n          <div class=\"card\" >\n            <app-image-loader [routerLink]=\"getBookDetailLink(book)\" [customClass]=\"'clickable card-img-top '\" *ngIf=\"book.cover\" [imageId]=\"book.cover.id\"></app-image-loader>\n            <div class=\"card-body border-0 bg-transparent\">\n              <h6 class=\"card-title font-italic\">{{book.title}}</h6>\n              <span class=\"card-text \">   {{ (book.description && book.description.length>100)? (book.description | slice:0:100)+'...':(book.description ? book.description : 'No description available') }}</span>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n\n\n\n  </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/image-loader/image-loader.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-loader/image-loader.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "    <img [ngClass]=\"customClass\" *ngIf=\"imageBase64\" [src]=\"imageBase64\" >\n    <div *ngIf=\"!imageBase64\" class=\"lds-ellipsis\">\n      <div></div>\n      <div></div>\n      <div></div>\n      <div></div>\n    </div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/image-preview/image-preview.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/image-preview/image-preview.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<fieldset>\n    <div *ngIf=\"!imgURL && !defaultImage\">\n      <label for=\"cover\" class=\"btn btn-default w-100 h-100\">\n        <svg width=\"100%\" height=\"100%\"\n             style=\"background-color: rgb(243, 243, 243);border:dashed 2px rgb(146, 146, 146);\">\n          <text x=\"40%\" y=\"50%\" fill=\"#999\" style=\"font-weight: bold;text-align: center;\">Cover</text>\n        </svg>\n      </label>\n    </div>\n    <label for=\"cover\"  class=\"col-lg-12\" *ngIf=\"!imgURL && defaultImage\" >\n      <img [src]=\"getUrlForDefaultCover(defaultImage)\" width=\"100%\" height=\"100%\"/>\n    </label>\n    <label for=\"cover\" class=\"col-lg-12\">\n      <img [src]=\"imgURL\" *ngIf=\"imgURL\" width=\"100%\" height=\"100%\"/>\n    </label>\n    <div class=\"col-lg-12\">\n      <div *ngIf=\"loadingCover\" class=\"progress\">\n        <div class=\"progress-bar-animated progress-bar-striped bg-danger\" role=\"progressbar\" style=\"width: 100%\"\n             aria-valuenow=\"100\" aria-valuemin=\"0\" aria-valuemax=\"100\"></div>\n      </div>\n    </div>\n  <input #file id=\"cover\" type=\"file\" style=\"display:none\" (change)=\"preview(file.files)\">\n</fieldset>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div (keydown.enter)=\"login()\" *ngIf=\"!isLoggedIn()\" class=\"form-inline my-2 my-lg-0\">\n  <input autocapitalize=\"none\" autofocus=\"autofocus\" [(ngModel)]=\"username\" name=\"username\" class=\"border-radius-0 form-control mr-sm-2\"\n         type=\"text\"\n         placeholder=\"Username\" aria-label=\"Username\">\n  <input (keydown.enter)=\"login()\" [(ngModel)]=\"password\" name=\"password\" class=\"form-control mr-sm-2 border-radius-0 \"\n         type=\"password\" placeholder=\"Password\"\n         aria-label=\"Password\">\n  <button class=\"btn  border-0 btn-outline-secondary text-white text-uppercase\" type=\"button\" (click)=\"login()\">\n    <span class=\"text-uppercase\">Sign in&nbsp;</span>\n    <fa-icon [icon]=\"faSignInAlt\" ></fa-icon>\n  </button>\n</div>\n<div *ngIf=\"isLoggedIn()\" class=\"form-inline my-2 my-lg-0\">\n  <div *ngIf=\"currentChapter\" >\n    <app-audio-player [currentTime]=\"currentChapter.currentTime || 0.0\" [updateCurrentTimeUrl]=\"getUpdateCurrentTimeUrl()\" [currentPlayer]=\"true\" [linkDetail]=\"getChapterDetailLink()\" [upload]=\"currentChapter.chapter.upload\" [title]=\"currentChapter.chapter.title\"></app-audio-player>\n  </div>\n  <button class=\"btn border-0 btn-outline-danger text-white my-2 my-sm-0 \" type=\"button\" (click)=\"logout()\">\n    <span>{{getUser().username | uppercase}}</span>&nbsp;\n    <fa-icon [icon]=\"faSignOutAlt\"></fa-icon>\n  </button>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/logo/logo.component.html":
/*!********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/logo/logo.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [ngClass]=\"headerClass\">\n    <span  [routerLink]=\"'/'\" class=\"clickable display-1 text-muted border-secondary  \">\n      <span class=\"text-primary  font-weight-bold\" [innerHTML]=\"'\\u266D'\"></span>\n      <span class=\"text-danger  font-weight-bold\" [innerHTML]=\"'\\u266E'\"></span>\n      <span class=\"text-warning  font-weight-bold\" [innerHTML]=\"'\\u266E'\"></span>\n      <span class=\"text-success  font-weight-bold\" [innerHTML]=\"'\\u266F'\"></span>\n    </span>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/my-books/my-books.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/my-books/my-books.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-logo [headerClass]=\"'text-center  mt-5  pt-5 '\"></app-logo>\n<div class=\"container mt-5\">\n  <div [ngClass]=\"!bookFormVisible? 'text-center':'col-12'\">\n    <app-book-form  (emitter)=\"bookFormVisible = $event\" [editMode]=\"false\" [book]=\"newBook()\"></app-book-form>\n  </div>\n</div>\n<div class=\"container\" *ngIf=\"books &&!books.empty\">\n\n  <div *ngIf=\"!bookFormVisible\">\n    <div  class=\"card mb-2\" *ngFor=\"let book of books.content | paginate: { itemsPerPage: books.size, currentPage: books.number+1, totalItems: books.totalElements}\">\n      <div class=\"card-body\">\n        <div class=\"text-muted text-dark clickable\" [routerLink]=\"linkToBook(book,'view')\">\n          <p class=\"ml-1 \">\n            <app-image-loader *ngIf=\"book.cover\" [imageId]=\"book.cover.id\" customClass=\"img-fluid col-2 mt-2 mb-2  \"></app-image-loader>\n            {{book.title}}\n          </p>\n        </div>\n      </div>\n      <div class=\"card-footer\">\n\n        <span *ngIf=\"book.published\" class=\" font-italic text-muted \">Published:&nbsp;<fa-icon class=\"text-success\" [icon]=\"['far','check-circle']\"></fa-icon></span>\n        <span *ngIf=\"!book.published\" class=\" font-italic text-muted \">Published:&nbsp;<fa-icon class=\"text-danger\" [icon]=\"['fas','exclamation-circle']\"></fa-icon></span>\n\n        <div class=\"btn-group float-right\">\n          <button  class=\"btn btn-sm btn-primary\" [routerLink]=\"linkToBook(book,'view')\" aria-label=\"View\"><fa-icon [icon]=\"['fas','eye']\"></fa-icon></button>\n          <button [id]=\"book.id + 'editaction'\"   [routerLink]=\"linkToBook(book,'edit')\" class=\"btn btn-sm btn-warning\"\n                  aria-label=\"Edit\"><fa-icon [icon]=\"['fas','edit']\">></fa-icon></button>\n\n          <button [id]=\"book.id+'delaction'\" (click)=\"delete(book,$event)\" class=\"btn btn-sm btn-danger\" aria-label=\"Delete\"><fa-icon [icon]=\"['fas','trash']\"></fa-icon> </button>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n  <div *ngIf=\"!bookFormVisible && books && !books.empty && books.totalPages  > 1\"\n       class=\"text-center container mt-3 mr-1 mb-3 pb-1 \">\n    <div class=\"text-wrap\">\n      <pagination-controls (pageChange)=\"getMyBooks($event)\"\n                           previousLabel=\"\"\n                           autoHide=\"true\"\n                           class=\"my-pagination \"\n                           nextLabel=\"\">\n      </pagination-controls>\n    </div>\n  </div>\n</div>\n\n<div *ngIf=\"!bookFormVisible && (!books || books.empty)\" class=\"mt-5 container alert alert-danger\">\n  <fa-icon [icon]=\"['fas','exclamation']\" class=\"fa-4x\"></fa-icon>\n  <p>You have no content yet</p>\n</div>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html":
/*!************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/navbar/navbar.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark    bg-dark fixed-top\">\n  <button class=\"navbar-toggler pb-2\" type=\"button\" (click)=\"toggleNavbar()\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div [ngClass]=\"toggleNavbarShow()\" id=\"navbarTogglerDemo01\">\n    <ul class=\"navbar-nav mr-auto pt-1\">\n      <li [ngClass]=\"'nav-item ' +( m.selected ? 'active' :'')\" *ngFor=\"let m of menu\" (click)=\"$event.preventDefault();click(m);m.selected=true;\">\n        <a routerLink=\"{{m.route}}\" *ngIf=\"hasRole(m.role)\" class=\"nav-link\">\n          <fa-icon [icon]=\"m.icon\" class=\"\"></fa-icon>\n        <span class=\"text-uppercase\">&nbsp;{{m.label}}</span>\n        </a>\n      </li>\n      <li class=\"nav-item\" *ngFor=\"let link of externalLink\">\n        <a target=\"_blank\" rel=\"noopener noreferrer\" [href]=\"link.route\" *ngIf=\"hasRole(link.role)\" class=\"nav-link\">\n          <fa-icon [icon]=\"link.icon\"></fa-icon>\n        </a>\n      </li>\n    </ul>\n    <app-login></app-login>\n\n  </div>\n</nav>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/stars/stars.component.html":
/*!**********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/stars/stars.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <span class=\"text-warning\" *ngFor=\"let i of [1,2,3,4,5]\">\n    <fa-icon  *ngIf=\"editable && editMode\" (mouseenter)=\"updateRating(i)\" [icon]=\"getIconFromCurr(i, inputStar.star)\"></fa-icon>\n    <fa-icon  *ngIf=\"!editable || !editMode\" [icon]=\"getIcon(i)\"></fa-icon>\n  </span>\n  <a class=\"btn btn-link text-secondary clickable\" *ngIf=\"editable && !editMode\" (click)=\"editMode=!editMode\">Vote({{star.length}})</a>\n  <a class=\"btn btn-link text-success clickable\" *ngIf=\"editable &&  editMode\" (click)=\"emitVote()\">Submit</a>\n"

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _service_authguardservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/authguardservice */ "./src/app/service/authguardservice.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _my_books_my_books_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./my-books/my-books.component */ "./src/app/my-books/my-books.component.ts");
/* harmony import */ var _books_detail_books_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./books-detail/books-detail.component */ "./src/app/books-detail/books-detail.component.ts");









var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'error', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] },
    { path: 'books', component: _books_books_component__WEBPACK_IMPORTED_MODULE_6__["BooksComponent"], canActivate: [_service_authguardservice__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], data: { expectedRole: ['USER', 'ANONYMOUS', 'ADMIN', 'CONTRIBUTOR'] } },
    { path: 'books/:title/:id/:editMode', component: _books_detail_books_detail_component__WEBPACK_IMPORTED_MODULE_8__["BooksDetailComponent"], canActivate: [_service_authguardservice__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], data: { expectedRole: ['USER', 'ANONYMOUS', 'ADMIN', 'CONTRIBUTOR'] } },
    { path: 'my-books', component: _my_books_my_books_component__WEBPACK_IMPORTED_MODULE_7__["MyBooksComponent"], canActivate: [_service_authguardservice__WEBPACK_IMPORTED_MODULE_4__["AuthGuardService"]], data: { expectedRole: ['USER', 'ADMIN', 'CONTRIBUTOR'] } },
    { path: '**', component: _error_error_component__WEBPACK_IMPORTED_MODULE_3__["ErrorComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "html, body {\n  height: 100%;\n  margin: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0VBQ1osU0FBUztBQUNYIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJodG1sLCBib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW46IDA7XG59XG4iXX0= */"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");





var AppComponent = /** @class */ (function () {
    function AppComponent(router, authService) {
        this.router = router;
        if (Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["isDevMode"])()) {
            console.log('👋 Development! Backend Url= ' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl);
        }
        else {
            console.log('💪 Production! Backend Url=' + _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl);
        }
        this.subscription = router.events.subscribe(function (event) {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
                if (!router.navigated && authService.getUser()) {
                    // browser refresh, clean the local storage.
                    // it can also be done using a timeout that we store in the localstorage as well
                    // this is necessary for the authentication part
                    console.log('browser refresh, check authentication (disabled...');
                    authService.autoLogin(true);
                }
            }
        });
    }
    AppComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _error_error_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./error/error.component */ "./src/app/error/error.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _service_authguardservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./service/authguardservice */ "./src/app/service/authguardservice.ts");
/* harmony import */ var _login_authinterceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/authinterceptor */ "./src/app/login/authinterceptor.ts");
/* harmony import */ var _login_errorinterceptor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/errorinterceptor */ "./src/app/login/errorinterceptor.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ngx_json_viewer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-json-viewer */ "./node_modules/ngx-json-viewer/ngx-json-viewer.es5.js");
/* harmony import */ var _books_books_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./books/books.component */ "./src/app/books/books.component.ts");
/* harmony import */ var _books_detail_books_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./books-detail/books-detail.component */ "./src/app/books-detail/books-detail.component.ts");
/* harmony import */ var _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./book-form/book-form.component */ "./src/app/book-form/book-form.component.ts");
/* harmony import */ var _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./image-preview/image-preview.component */ "./src/app/image-preview/image-preview.component.ts");
/* harmony import */ var _image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./image-loader/image-loader.component */ "./src/app/image-loader/image-loader.component.ts");
/* harmony import */ var _chapters_chapters_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./chapters/chapters.component */ "./src/app/chapters/chapters.component.ts");
/* harmony import */ var _chapter_detail_chapter_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./chapter-detail/chapter-detail.component */ "./src/app/chapter-detail/chapter-detail.component.ts");
/* harmony import */ var ngx_autosize__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ngx-autosize */ "./node_modules/ngx-autosize/fesm5/ngx-autosize.js");
/* harmony import */ var _chapter_form_chapter_form_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./chapter-form/chapter-form.component */ "./src/app/chapter-form/chapter-form.component.ts");
/* harmony import */ var angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! angular-autofocus-fix */ "./node_modules/angular-autofocus-fix/index.js");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm5/angular-fontawesome.js");
/* harmony import */ var _stars_stars_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./stars/stars.component */ "./src/app/stars/stars.component.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @fortawesome/free-regular-svg-icons */ "./node_modules/@fortawesome/free-regular-svg-icons/index.es.js");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./audio-player/audio-player.component */ "./src/app/audio-player/audio-player.component.ts");
/* harmony import */ var _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./logo/logo.component */ "./src/app/logo/logo.component.ts");
/* harmony import */ var _my_books_my_books_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./my-books/my-books.component */ "./src/app/my-books/my-books.component.ts");

































var AppModule = /** @class */ (function () {
    function AppModule(library) {
        // Add an icon to the library for convenient access in other components
        library.addIconPacks(_fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_28__["fas"], _fortawesome_free_regular_svg_icons__WEBPACK_IMPORTED_MODULE_29__["far"]);
    }
    AppModule.ctorParameters = function () { return [
        { type: _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FaIconLibrary"] }
    ]; };
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _error_error_component__WEBPACK_IMPORTED_MODULE_9__["ErrorComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                _books_books_component__WEBPACK_IMPORTED_MODULE_16__["BooksComponent"],
                _books_detail_books_detail_component__WEBPACK_IMPORTED_MODULE_17__["BooksDetailComponent"],
                _book_form_book_form_component__WEBPACK_IMPORTED_MODULE_18__["BookFormComponent"],
                _image_preview_image_preview_component__WEBPACK_IMPORTED_MODULE_19__["ImagePreviewComponent"],
                _image_loader_image_loader_component__WEBPACK_IMPORTED_MODULE_20__["ImageLoaderComponent"],
                _chapters_chapters_component__WEBPACK_IMPORTED_MODULE_21__["ChaptersComponent"],
                _chapter_detail_chapter_detail_component__WEBPACK_IMPORTED_MODULE_22__["ChapterDetailComponent"],
                _chapter_form_chapter_form_component__WEBPACK_IMPORTED_MODULE_24__["ChapterFormComponent"],
                _stars_stars_component__WEBPACK_IMPORTED_MODULE_27__["StarsComponent"],
                _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_30__["AudioPlayerComponent"],
                _logo_logo_component__WEBPACK_IMPORTED_MODULE_31__["LogoComponent"],
                _my_books_my_books_component__WEBPACK_IMPORTED_MODULE_32__["MyBooksComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                ngx_json_viewer__WEBPACK_IMPORTED_MODULE_15__["NgxJsonViewerModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                ngx_autosize__WEBPACK_IMPORTED_MODULE_23__["AutosizeModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_14__["NgxPaginationModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                angular_autofocus_fix__WEBPACK_IMPORTED_MODULE_25__["AutofocusModule"],
                _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_26__["FontAwesomeModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _login_authinterceptor__WEBPACK_IMPORTED_MODULE_12__["AuthInterceptor"], multi: true },
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HTTP_INTERCEPTORS"], useClass: _login_errorinterceptor__WEBPACK_IMPORTED_MODULE_13__["ErrorInterceptor"], multi: true },
                { provide: _service_authguardservice__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"], useClass: _service_authguardservice__WEBPACK_IMPORTED_MODULE_11__["AuthGuardService"] }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/audio-player/audio-player.component.css":
/*!*********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "audio\n{\n  height: 32px;\n  outline: none;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXVkaW8tcGxheWVyL2F1ZGlvLXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztFQUVFLFlBQVk7RUFDWixhQUFhO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9hdWRpby1wbGF5ZXIvYXVkaW8tcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJhdWRpb1xue1xuICBoZWlnaHQ6IDMycHg7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/audio-player/audio-player.component.ts":
/*!********************************************************!*\
  !*** ./src/app/audio-player/audio-player.component.ts ***!
  \********************************************************/
/*! exports provided: AudioPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AudioPlayerComponent", function() { return AudioPlayerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _service_updatecurrenttimeservice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/updatecurrenttimeservice */ "./src/app/service/updatecurrenttimeservice.ts");






var AudioPlayerComponent = /** @class */ (function () {
    function AudioPlayerComponent(updateCurrentTimeService, router, cd, authenticationService) {
        this.updateCurrentTimeService = updateCurrentTimeService;
        this.router = router;
        this.cd = cd;
        this.authenticationService = authenticationService;
        this.updateCurrentTimeUrl = null;
        this.currentTime = 0;
        this.showTitle = true;
        this.showPlayer = true;
    }
    AudioPlayerComponent_1 = AudioPlayerComponent;
    AudioPlayerComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.getUser() !== null;
    };
    AudioPlayerComponent.prototype.getSource = function () {
        return AudioPlayerComponent_1.getSourceById(this.upload.id);
    };
    AudioPlayerComponent.prototype.ngAfterViewInit = function () {
        this.setCurrentTime(this.currentTime);
        if (this.currentPlayer) {
            AudioPlayerComponent_1.currentPlayerMgmt = this;
        }
    };
    AudioPlayerComponent.prototype.ngOnInit = function () {
        AudioPlayerComponent_1.audioSources.push(this);
    };
    AudioPlayerComponent.prototype.propagatePlayingEvent = function (event) {
        var _this = this;
        console.log('playing:', event);
        AudioPlayerComponent_1.audioSources
            .filter(function (a) { return a.audioSource.nativeElement.id !== _this.audioSource.nativeElement.id; })
            .forEach(function (a) {
            a.audioSource.nativeElement.pause();
        });
        this.updateCurrentTimeInterval = setInterval(function () {
            if (_this.updateCurrentTimeUrl && _this.audioSource && _this.audioSource.nativeElement) {
                var currentT = _this.audioSource.nativeElement.currentTime;
                if (!_this.isLoggedIn()) {
                    clearInterval(_this.updateCurrentTimeInterval);
                }
                _this.updateCurrentTimeService.updateTime(_this.updateCurrentTimeUrl, currentT);
            }
            else {
                clearInterval(_this.updateCurrentTimeInterval);
            }
        }, 10000);
    };
    AudioPlayerComponent.getSourceById = function (id) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/upload/' + id;
    };
    AudioPlayerComponent.reloadCurrentPlayer = function (newId, title) {
        var currentPlayerMgmt = AudioPlayerComponent_1.currentPlayerMgmt;
        if (currentPlayerMgmt) {
            try {
                if (newId) {
                    console.log("new" + newId);
                    var audioSource = currentPlayerMgmt.audioSource;
                    currentPlayerMgmt.title = title;
                    audioSource.nativeElement.src = AudioPlayerComponent_1.getSourceById(newId);
                    audioSource.nativeElement.pause();
                }
                else {
                    AudioPlayerComponent_1.currentPlayerMgmt.upload = null;
                }
            }
            catch (e) {
                console.log("error handled ", e);
                AudioPlayerComponent_1.currentPlayerMgmt.upload = null;
            }
        }
    };
    AudioPlayerComponent.prototype.propagatePauseEvent = function ($event) {
        console.log('paused');
        if (this.updateCurrentTimeInterval) {
            clearInterval(this.updateCurrentTimeInterval);
            this.updateCurrentTimeInterval = null;
        }
    };
    AudioPlayerComponent.prototype.setCurrentTime = function (time) {
        this.audioSource.nativeElement.currentTime = time;
    };
    var AudioPlayerComponent_1;
    AudioPlayerComponent.audioSources = []; // todo use redux like solution
    AudioPlayerComponent.ctorParameters = function () { return [
        { type: _service_updatecurrenttimeservice__WEBPACK_IMPORTED_MODULE_5__["UpdateCurrentTimeService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('audioSource', { static: false })
    ], AudioPlayerComponent.prototype, "audioSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "updateCurrentTimeUrl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "currentTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "currentPlayer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "linkDetail", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "upload", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AudioPlayerComponent.prototype, "showTitle", void 0);
    AudioPlayerComponent = AudioPlayerComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-audio-player',
            template: __webpack_require__(/*! raw-loader!./audio-player.component.html */ "./node_modules/raw-loader/index.js!./src/app/audio-player/audio-player.component.html"),
            styles: [__webpack_require__(/*! ./audio-player.component.css */ "./src/app/audio-player/audio-player.component.css")]
        })
    ], AudioPlayerComponent);
    return AudioPlayerComponent;
}());



/***/ }),

/***/ "./src/app/book-form/book-form.component.css":
/*!***************************************************!*\
  !*** ./src/app/book-form/book-form.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2stZm9ybS9ib29rLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/book-form/book-form.component.ts":
/*!**************************************************!*\
  !*** ./src/app/book-form/book-form.component.ts ***!
  \**************************************************/
/*! exports provided: BookFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookFormComponent", function() { return BookFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");







var BookFormComponent = /** @class */ (function () {
    function BookFormComponent(bookService, router, authenticationService) {
        this.bookService = bookService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSave"];
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.bookCreatedCallback = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.formVisible = false;
        this.showCross = true;
        this.savingButton = 'Save';
    }
    BookFormComponent.prototype.ngOnInit = function () {
        this.bookCopy = JSON.parse(JSON.stringify(this.book));
        this.fetchCountryCode();
    };
    BookFormComponent.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    BookFormComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    BookFormComponent.prototype.fetchCountryCode = function () {
        var _this = this;
        this.bookService.fetchCountryCode(function (datas) {
            _this.countryCode = datas;
        });
    };
    BookFormComponent.prototype.setCover = function ($imagePreview) {
        this.coverChanged = true;
        this.bookCopy.cover = btoa($imagePreview.imgURL.split(',')[1]);
        this.bookCopy.fileName = $imagePreview.fileName;
        this.bookCopy.contentType = $imagePreview.contentType;
        console.log(this.book);
    };
    BookFormComponent.prototype.navigate = function (book, editMode) {
        var slug = _common_slugify__WEBPACK_IMPORTED_MODULE_5__["Slugify"].slugify(book.title);
        this.router.navigateByUrl('/books/' + slug + '/' + book.id + '/' + editMode);
    };
    BookFormComponent.prototype.saveBookToDB = function ($e) {
        var _this = this;
        $e.stopPropagation();
        this.savingButton = 'Saving...';
        this.saving = true;
        var bookToSave = {
            id: this.bookCopy.id,
            lang: this.bookCopy.lang,
            published: this.bookCopy.published,
            title: this.bookCopy.title,
            description: this.bookCopy.description,
            author: this.bookCopy.author,
            cover: this.coverChanged ? this.bookCopy.cover : null,
            fileName: this.coverChanged ? this.bookCopy.fileName : null,
            contentType: this.coverChanged ? this.bookCopy.contentType : null,
            category: this.bookCopy.category
        };
        this.bookService.saveBookToDb(bookToSave, function (datas) {
            _this.savingButton = 'Saved';
            _this.bookCreatedCallback.emit(datas.message);
            _this.navigate(datas, 'view');
        });
    };
    BookFormComponent.prototype.toggleFormVisible = function () {
        this.formVisible = !this.formVisible;
        this.emitter.emit(this.formVisible);
    };
    BookFormComponent.ctorParameters = function () { return [
        { type: _service_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BookFormComponent.prototype, "book", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BookFormComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BookFormComponent.prototype, "emitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], BookFormComponent.prototype, "bookCreatedCallback", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BookFormComponent.prototype, "formVisible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], BookFormComponent.prototype, "showCross", void 0);
    BookFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-book-form',
            template: __webpack_require__(/*! raw-loader!./book-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/book-form/book-form.component.html"),
            styles: [__webpack_require__(/*! ./book-form.component.css */ "./src/app/book-form/book-form.component.css")]
        })
    ], BookFormComponent);
    return BookFormComponent;
}());



/***/ }),

/***/ "./src/app/books-detail/books-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/books-detail/books-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzLWRldGFpbC9ib29rcy1kZXRhaWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/books-detail/books-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/books-detail/books-detail.component.ts ***!
  \********************************************************/
/*! exports provided: BooksDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksDetailComponent", function() { return BooksDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");








var BooksDetailComponent = /** @class */ (function () {
    function BooksDetailComponent(bookService, router, authenticationService, location, route) {
        this.bookService = bookService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.location = location;
        this.route = route;
        this.faArrowLeft = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faArrowLeft"];
    }
    BooksDetailComponent.prototype.back = function () {
        this.location.back();
    };
    BooksDetailComponent.prototype.fetchBook = function (id, title) {
        var _this = this;
        this.bookService.fetchBook(id, title, function (datas) {
            _this.book = datas;
            _this.checkRights();
        });
    };
    BooksDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.book = null;
            var id = params.id;
            var title = params.title;
            var editMode = params.editMode;
            _this.fetchBook(id, title);
            _this.editMode = editMode === 'edit';
        });
    };
    BooksDetailComponent.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    BooksDetailComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    BooksDetailComponent.prototype.rateBook = function ($event) {
        var _this = this;
        this.bookService.rateBook($event, this.book, function (datas) {
            _this.fetchBook(_this.book.id, _common_slugify__WEBPACK_IMPORTED_MODULE_6__["Slugify"].slugify(_this.book.title));
        });
    };
    BooksDetailComponent.prototype.hasAnyRole = function () {
        var _a;
        var expected = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expected[_i] = arguments[_i];
        }
        return (_a = this.authenticationService).hasAnyRole.apply(_a, tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](expected));
    };
    BooksDetailComponent.prototype.hasRole = function (expected) {
        return this.hasAnyRole(expected);
    };
    BooksDetailComponent.prototype.navigate = function (book, editMode) {
        this.bookService.bookDetailFor(book, editMode);
    };
    BooksDetailComponent.prototype.checkRights = function () {
        if (this.editMode && !this.hasRight()) {
            this.bookService.bookDetailFor(this.book, 'view');
            if (!this.hasRight()) {
                this.navigate(this.book, "view");
            }
        }
    };
    BooksDetailComponent.prototype.hasRight = function () {
        return this.authenticationService.hasRight(this.book);
    };
    BooksDetailComponent.ENDPOINT = '/book';
    BooksDetailComponent.ctorParameters = function () { return [
        { type: _service_book_service__WEBPACK_IMPORTED_MODULE_7__["BookService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    BooksDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books-detail',
            template: __webpack_require__(/*! raw-loader!./books-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/books-detail/books-detail.component.html"),
            styles: [__webpack_require__(/*! ./books-detail.component.css */ "./src/app/books-detail/books-detail.component.css")]
        })
    ], BooksDetailComponent);
    return BooksDetailComponent;
}());



/***/ }),

/***/ "./src/app/books/book.ts":
/*!*******************************!*\
  !*** ./src/app/books/book.ts ***!
  \*******************************/
/*! exports provided: Book, BookDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Book", function() { return Book; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookDto", function() { return BookDto; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _common_auditable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/auditable */ "./src/app/common/auditable.ts");


var Book = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](Book, _super);
    function Book() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Book;
}(_common_auditable__WEBPACK_IMPORTED_MODULE_1__["Auditable"]));

var BookDto = /** @class */ (function () {
    function BookDto() {
    }
    return BookDto;
}());



/***/ }),

/***/ "./src/app/books/books.component.css":
/*!*******************************************!*\
  !*** ./src/app/books/books.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jvb2tzL2Jvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/books/books.component.ts":
/*!******************************************!*\
  !*** ./src/app/books/books.component.ts ***!
  \******************************************/
/*! exports provided: BooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BooksComponent", function() { return BooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");






var BooksComponent = /** @class */ (function () {
    function BooksComponent(router, authenticationService, bookService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.bookService = bookService;
        this.faSync = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSync"];
        this.faEdit = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEdit"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.faEye = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faEye"];
    }
    BooksComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.bookService.fetchTitles(function (datas) {
            _this.titles = datas;
        });
    };
    BooksComponent.prototype.hasRole = function (expected) {
        return this.authenticationService.hasRole([expected]);
    };
    BooksComponent.prototype.navigate = function (book, editMode) {
        this.bookService.bookDetailFor(book, editMode);
    };
    BooksComponent.prototype.getBooks = function (event) {
        var _this = this;
        var next = function (datas) {
            _this.books = datas;
            setTimeout(function () {
                _this.loading = false;
            }, 1000);
        };
        if (this.searchText && this.searchText.length > 0) {
            this.searchBookByTitle(this.searchText, event);
        }
        else {
            this.loading = true;
            this.books = [];
            this.bookService.getBooks(next, event);
        }
    };
    BooksComponent.prototype.isLoggedIn = function () {
        return this.authenticationService.isLoggedIn();
    };
    BooksComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    BooksComponent.prototype.getTotalDuration = function (book) {
        return this.bookService.getTotalDuration(book);
    };
    BooksComponent.prototype.hasRight = function (book) {
        return this.authenticationService.hasRight(book);
    };
    BooksComponent.prototype.searchBookByTitle = function (title, page) {
        var _this = this;
        if (page === void 0) { page = 1; }
        this.loading = true;
        this.books = [];
        this.bookService.searchBookByTitle(title, function (datas) {
            _this.books = datas;
            _this.loading = false;
        }, page);
    };
    BooksComponent.ENDPOINT = '/book';
    BooksComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _service_book_service__WEBPACK_IMPORTED_MODULE_5__["BookService"] }
    ]; };
    BooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-books',
            template: __webpack_require__(/*! raw-loader!./books.component.html */ "./node_modules/raw-loader/index.js!./src/app/books/books.component.html"),
            styles: [__webpack_require__(/*! ./books.component.css */ "./src/app/books/books.component.css")]
        })
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "./src/app/chapter-detail/chapter-detail.component.css":
/*!*************************************************************!*\
  !*** ./src/app/chapter-detail/chapter-detail.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dotted {\n  display: -webkit-box;\n  display: flex;\n}\n.dotted .item,\n.dotted .price {\n  -webkit-box-flex: 1;\n          flex: 1 0 auto;\n}\n.dotted .dots {\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n  /*Allows too long content to be hidden.*/\n  overflow: hidden;\n}\n.dots::before {\n  display: block;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: clip;\n  content:\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n    \". . . . . . . . . . . . . . . . . . . . \"\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2hhcHRlci1kZXRhaWwvY2hhcHRlci1kZXRhaWwuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG9CQUFhO0VBQWIsYUFBYTtBQUNmO0FBQ0E7O0VBRUUsbUJBQWM7VUFBZCxjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxtQkFBYztVQUFkLGNBQWM7RUFDZCx3Q0FBd0M7RUFDeEMsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxjQUFjO0VBQ2QsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkI7Ozs7Ozs7Ozs7QUFVRiIsImZpbGUiOiJzcmMvYXBwL2NoYXB0ZXItZGV0YWlsL2NoYXB0ZXItZGV0YWlsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZG90dGVkIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5kb3R0ZWQgLml0ZW0sXG4uZG90dGVkIC5wcmljZSB7XG4gIGZsZXg6IDEgMCBhdXRvO1xufVxuLmRvdHRlZCAuZG90cyB7XG4gIGZsZXg6IDAgMSBhdXRvO1xuICAvKkFsbG93cyB0b28gbG9uZyBjb250ZW50IHRvIGJlIGhpZGRlbi4qL1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuLmRvdHM6OmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0ZXh0LW92ZXJmbG93OiBjbGlwO1xuICBjb250ZW50OlxuICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIFwiXG4gICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gXCJcbiAgICBcIi4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiBcIlxuICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIFwiXG4gICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gXCJcbiAgICBcIi4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiBcIlxuICAgIFwiLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIFwiXG4gICAgXCIuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gXCJcbiAgICBcIi4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiAuIC4gLiBcIlxufVxuIl19 */"

/***/ }),

/***/ "./src/app/chapter-detail/chapter-detail.component.ts":
/*!************************************************************!*\
  !*** ./src/app/chapter-detail/chapter-detail.component.ts ***!
  \************************************************************/
/*! exports provided: ChapterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterDetailComponent", function() { return ChapterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _chapters_chapterdto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../chapters/chapterdto */ "./src/app/chapters/chapterdto.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../audio-player/audio-player.component */ "./src/app/audio-player/audio-player.component.ts");
/* harmony import */ var _service_chapter_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../service/chapter.service */ "./src/app/service/chapter.service.ts");








var ChapterDetailComponent = /** @class */ (function () {
    function ChapterDetailComponent(chapterService, router, cd, authenticationService) {
        this.chapterService = chapterService;
        this.router = router;
        this.cd = cd;
        this.authenticationService = authenticationService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSave"];
        this.editMode = false;
    }
    ChapterDetailComponent.prototype.ngOnInit = function () {
    };
    ChapterDetailComponent.prototype.updateChapter = function ($event, updateType) {
        var _this = this;
        $event.preventDefault();
        var chap = new _chapters_chapterdto__WEBPACK_IMPORTED_MODULE_4__["ChapterDto"]();
        chap.id = this.chapter.id;
        chap.title = this.chapter.title;
        chap.description = this.chapter.description;
        this.chapterService.updateChapter(chap, function (datas) {
            switch (updateType) {
                case 'editTitle':
                    _this.toggleTitle();
                    break;
                case 'editDescription':
                    _this.toggleDescription();
                    break;
            }
        });
    };
    ChapterDetailComponent.prototype.toggleTitle = function () {
        this.editTitle = this.editMode && !this.editTitle;
        this.cd.detectChanges();
    };
    ChapterDetailComponent.prototype.toggleDescription = function () {
        this.editDescription = this.editMode && !this.editDescription;
        this.cd.detectChanges();
    };
    ChapterDetailComponent.prototype.getTimeDuration = function (chapter) {
        return Math.round(chapter.timeDuration / 1000 / 60) + ' minutes';
    };
    ChapterDetailComponent.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    ChapterDetailComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    ChapterDetailComponent.prototype.getCurrentChapter = function () {
        var currentChapter = (this.getUser() || {}).currentChapter;
        return currentChapter;
    };
    ChapterDetailComponent.prototype.updateCurrentChapter = function ($event) {
        var _this = this;
        var next = function (datas) {
            _this.authenticationService.autoLogin(true);
            var currentChapterUploadId = (datas.currentChapter || { upload: {} }).upload.id;
            _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_6__["AudioPlayerComponent"].reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter || {}).title);
        };
        console.log(this.chapterService);
        this.chapterService.updateCurrentChapter(this.chapter, next);
    };
    ChapterDetailComponent.prototype.isChecked = function () {
        return this.getCurrentChapter() != null && this.getCurrentChapter().id === this.chapter.id;
    };
    ChapterDetailComponent.ctorParameters = function () { return [
        { type: _service_chapter_service__WEBPACK_IMPORTED_MODULE_7__["ChapterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('title', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], static: true })
    ], ChapterDetailComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChapterDetailComponent.prototype, "chapter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChapterDetailComponent.prototype, "editMode", void 0);
    ChapterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chapter-detail',
            template: __webpack_require__(/*! raw-loader!./chapter-detail.component.html */ "./node_modules/raw-loader/index.js!./src/app/chapter-detail/chapter-detail.component.html"),
            styles: [__webpack_require__(/*! ./chapter-detail.component.css */ "./src/app/chapter-detail/chapter-detail.component.css")]
        })
    ], ChapterDetailComponent);
    return ChapterDetailComponent;
}());



/***/ }),

/***/ "./src/app/chapter-form/chapter-form.component.css":
/*!*********************************************************!*\
  !*** ./src/app/chapter-form/chapter-form.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXB0ZXItZm9ybS9jaGFwdGVyLWZvcm0uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/chapter-form/chapter-form.component.ts":
/*!********************************************************!*\
  !*** ./src/app/chapter-form/chapter-form.component.ts ***!
  \********************************************************/
/*! exports provided: ChapterFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterFormComponent", function() { return ChapterFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _chapters_chapterdto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../chapters/chapterdto */ "./src/app/chapters/chapterdto.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/chapter.service */ "./src/app/service/chapter.service.ts");







var ChapterFormComponent = /** @class */ (function () {
    function ChapterFormComponent(chapterService, cd, router, authenticationService) {
        this.chapterService = chapterService;
        this.cd = cd;
        this.router = router;
        this.authenticationService = authenticationService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faPlus"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faTimes"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_5__["faSave"];
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.newChapter = new _chapters_chapterdto__WEBPACK_IMPORTED_MODULE_2__["ChapterDto"]();
        this.loadingNewFile = false;
    }
    ChapterFormComponent.prototype.ngOnInit = function () {
    };
    ChapterFormComponent.prototype.setNewChapterFile = function (event) {
        if (event.length === 0)
            return;
        this.newChapterFile = event;
        this.newChapter.fileName = this.newChapterFile[0].name;
        this.newChapter.contentType = this.newChapterFile[0].type;
    };
    ChapterFormComponent.prototype.setFile = function (file) {
        this.newChapter.file = file.split(',')[1];
    };
    ChapterFormComponent.prototype.publishNewChapter = function ($e) {
        var _this = this;
        this.cd.detectChanges();
        this.newChapter.bookId = this.bookId;
        this.loadingNewFile = true;
        var reader = new FileReader();
        reader.readAsDataURL(this.newChapterFile[0]);
        reader.onload = function (_event) {
            _this.setFile(reader.result);
            _this.newChapter.file = btoa(_this.newChapter.file);
            _this.chapterService.publish(_this.newChapter, function (datas) {
                _this.newChapter = new _chapters_chapterdto__WEBPACK_IMPORTED_MODULE_2__["ChapterDto"]();
                _this.formVisible = false;
                _this.loadingNewFile = false;
                _this.fileRef.nativeElement.value = '';
                _this.emitter.emit(datas);
            });
        };
    };
    ChapterFormComponent.ctorParameters = function () { return [
        { type: _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__["ChapterService"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ChapterFormComponent.prototype, "emitter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChapterFormComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChapterFormComponent.prototype, "bookId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileRef', { static: false })
    ], ChapterFormComponent.prototype, "fileRef", void 0);
    ChapterFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chapter-form',
            template: __webpack_require__(/*! raw-loader!./chapter-form.component.html */ "./node_modules/raw-loader/index.js!./src/app/chapter-form/chapter-form.component.html"),
            styles: [__webpack_require__(/*! ./chapter-form.component.css */ "./src/app/chapter-form/chapter-form.component.css")]
        })
    ], ChapterFormComponent);
    return ChapterFormComponent;
}());



/***/ }),

/***/ "./src/app/chapters/chapterdto.ts":
/*!****************************************!*\
  !*** ./src/app/chapters/chapterdto.ts ***!
  \****************************************/
/*! exports provided: ChapterDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterDto", function() { return ChapterDto; });
var ChapterDto = /** @class */ (function () {
    function ChapterDto() {
    }
    return ChapterDto;
}());



/***/ }),

/***/ "./src/app/chapters/chapters.component.css":
/*!*************************************************!*\
  !*** ./src/app/chapters/chapters.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NoYXB0ZXJzL2NoYXB0ZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/chapters/chapters.component.ts":
/*!************************************************!*\
  !*** ./src/app/chapters/chapters.component.ts ***!
  \************************************************/
/*! exports provided: ChaptersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChaptersComponent", function() { return ChaptersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../audio-player/audio-player.component */ "./src/app/audio-player/audio-player.component.ts");
/* harmony import */ var _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/chapter.service */ "./src/app/service/chapter.service.ts");







var ChaptersComponent = /** @class */ (function () {
    function ChaptersComponent(chapterService, router, authenticationService) {
        this.chapterService = chapterService;
        this.router = router;
        this.authenticationService = authenticationService;
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faPlus"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTimes"];
        this.faTrash = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faTrash"];
        this.faSave = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSave"];
    }
    ChaptersComponent.prototype.ngOnInit = function () {
        if (this.bookId) {
            this.getChapters();
        }
    };
    ChaptersComponent.prototype.getChapters = function (event) {
        var _this = this;
        if (event === void 0) { event = 1; }
        this.chapterService.getChapters(event, this.bookId, function (datas) {
            _this.chapters = datas;
        });
    };
    ChaptersComponent.prototype.deleteChapter = function (ch) {
        var _this = this;
        var next = function (datas) {
            _this.authenticationService.autoLogin();
            var currentChapterUploadId = (datas.currentChapter || { upload: {} }).upload.id;
            _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_5__["AudioPlayerComponent"].reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter || {}).title);
            _this.chapters = _this.chapters.content.filter(function (c) { return c.id !== ch.id; });
            alert(datas.message);
            _this.getChapters();
        };
        this.chapterService.deleteChapter(ch, next);
    };
    ChaptersComponent.prototype.refreshChapterList = function ($event) {
        var _this = this;
        setTimeout(function () {
            _this.getChapters();
        }, 1000);
    };
    ChaptersComponent.ctorParameters = function () { return [
        { type: _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__["ChapterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChaptersComponent.prototype, "editMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChaptersComponent.prototype, "bookId", void 0);
    ChaptersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chapters',
            template: __webpack_require__(/*! raw-loader!./chapters.component.html */ "./node_modules/raw-loader/index.js!./src/app/chapters/chapters.component.html"),
            styles: [__webpack_require__(/*! ./chapters.component.css */ "./src/app/chapters/chapters.component.css")]
        })
    ], ChaptersComponent);
    return ChaptersComponent;
}());



/***/ }),

/***/ "./src/app/common/auditable.ts":
/*!*************************************!*\
  !*** ./src/app/common/auditable.ts ***!
  \*************************************/
/*! exports provided: Auditable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auditable", function() { return Auditable; });
var Auditable = /** @class */ (function () {
    function Auditable() {
    }
    return Auditable;
}());



/***/ }),

/***/ "./src/app/common/slugify.ts":
/*!***********************************!*\
  !*** ./src/app/common/slugify.ts ***!
  \***********************************/
/*! exports provided: Slugify */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Slugify", function() { return Slugify; });
var Slugify = /** @class */ (function () {
    function Slugify() {
    }
    Slugify.slugify = function (string) {
        var a = 'àáäâãåăæąçćčđďèéěėëêęğǵḧìíïîįłḿǹńňñòóöôœøṕŕřßşśšșťțùúüûǘůűūųẃẍÿýźžż·/_,:;';
        var b = 'aaaaaaaaacccddeeeeeeegghiiiiilmnnnnooooooprrsssssttuuuuuuuuuwxyyzzz------';
        var p = new RegExp(a.split('').join('|'), 'g');
        return string.toString().toLowerCase()
            .replace(/\s+/g, '-') // Replace spaces with -
            .replace(p, function (c) { return b.charAt(a.indexOf(c)); }) // Replace special characters
            .replace(/&/g, '-and-') // Replace & with 'and'
            .replace(/[^\w\-]+/g, '') // Remove all non-word characters
            .replace(/\-\-+/g, '-') // Replace multiple - with single -
            .replace(/^-+/, '') // Trim - from start of text
            .replace(/-+$/, ''); // Trim - from end of text
    };
    return Slugify;
}());



/***/ }),

/***/ "./src/app/error/error.component.css":
/*!*******************************************!*\
  !*** ./src/app/error/error.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Vycm9yL2Vycm9yLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/error/error.component.ts":
/*!******************************************!*\
  !*** ./src/app/error/error.component.ts ***!
  \******************************************/
/*! exports provided: ErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorComponent", function() { return ErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var ErrorComponent = /** @class */ (function () {
    function ErrorComponent(route, router) {
        this.route = route;
        this.router = router;
    }
    ErrorComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this.route.queryParamMap);
        this.route
            .queryParams
            .subscribe(function (params) {
            console.log(params.length);
            _this.label = params['label'] || _this.label || 'Not Found';
            _this.status = params['status'] || _this.status || '404';
            _this.message = params['message'] || _this.message || 'Not found';
        });
    };
    ErrorComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-error',
            template: __webpack_require__(/*! raw-loader!./error.component.html */ "./node_modules/raw-loader/index.js!./src/app/error/error.component.html"),
            styles: [__webpack_require__(/*! ./error.component.css */ "./src/app/error/error.component.css")]
        })
    ], ErrorComponent);
    return ErrorComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _service_chapter_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../service/chapter.service */ "./src/app/service/chapter.service.ts");
/* harmony import */ var _service_book_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/book.service */ "./src/app/service/book.service.ts");







var HomeComponent = /** @class */ (function () {
    function HomeComponent(bookService, chapterService, router, authenticationService) {
        this.bookService = bookService;
        this.chapterService = chapterService;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    HomeComponent.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    HomeComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    HomeComponent.prototype.getBookDetailLink = function (book) {
        var link = '/books/' + _common_slugify__WEBPACK_IMPORTED_MODULE_4__["Slugify"].slugify(book.title) + '/' + book.id + '/' + 'view';
        return link;
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loading = true;
        this.books = null;
        this.bookService.getLast3Books(function (datas) {
            _this.books = datas;
            _this.loading = false;
        });
        this.bookService.getTop3Books(function (datas) {
            _this.topBooks = datas;
            _this.loading = false;
        });
        this.fetchHistories();
        this.authenticationService.userEvent.subscribe(function (event) {
            console.log(event);
            if (event === 'logout') {
                _this.histories = [];
            }
            else {
                _this.fetchHistories();
            }
        });
    };
    HomeComponent.prototype.getUpdateCurrentTimeUrl = function (currentChapter) {
        return "/user/chapter/" + currentChapter.chapter.id + "/current-time?time=";
    };
    HomeComponent.prototype.fetchHistories = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            this.chapterService.userHistory(function (datas) {
                _this.histories = datas;
            });
        }
    };
    HomeComponent.prototype.getChapterDetailLink = function (chapter) {
        var link = '/books/' + _common_slugify__WEBPACK_IMPORTED_MODULE_4__["Slugify"].slugify(chapter.title) + '/' + chapter.bookId + '/' + 'view';
        return link;
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _service_book_service__WEBPACK_IMPORTED_MODULE_6__["BookService"] },
        { type: _service_chapter_service__WEBPACK_IMPORTED_MODULE_5__["ChapterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        })
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/image-loader/image-loader.component.css":
/*!*********************************************************!*\
  !*** ./src/app/image-loader/image-loader.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLWxvYWRlci9pbWFnZS1sb2FkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/image-loader/image-loader.component.ts":
/*!********************************************************!*\
  !*** ./src/app/image-loader/image-loader.component.ts ***!
  \********************************************************/
/*! exports provided: ImageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageLoaderComponent", function() { return ImageLoaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");







var ImageLoaderComponent = /** @class */ (function () {
    function ImageLoaderComponent(http, authenticationService, location, route) {
        this.http = http;
        this.authenticationService = authenticationService;
        this.location = location;
        this.route = route;
        this.customClass = "img-fluid container";
        this.width = "100%";
        this.height = "100%";
    }
    ImageLoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].backendUrl + '/upload/' + this.imageId;
        this.http.get(url, { responseType: 'blob' }).subscribe(function (datas) {
            var reader = new FileReader();
            reader.readAsDataURL(datas);
            reader.onloadend = function () {
                _this.imageBase64 = reader.result;
            };
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ImageLoaderComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageLoaderComponent.prototype, "customClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageLoaderComponent.prototype, "imageId", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageLoaderComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageLoaderComponent.prototype, "height", void 0);
    ImageLoaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-loader',
            template: __webpack_require__(/*! raw-loader!./image-loader.component.html */ "./node_modules/raw-loader/index.js!./src/app/image-loader/image-loader.component.html"),
            styles: [__webpack_require__(/*! ./image-loader.component.css */ "./src/app/image-loader/image-loader.component.css")]
        })
    ], ImageLoaderComponent);
    return ImageLoaderComponent;
}());



/***/ }),

/***/ "./src/app/image-preview/image-preview.component.css":
/*!***********************************************************!*\
  !*** ./src/app/image-preview/image-preview.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ltYWdlLXByZXZpZXcvaW1hZ2UtcHJldmlldy5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/image-preview/image-preview.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/image-preview/image-preview.component.ts ***!
  \**********************************************************/
/*! exports provided: ImagePreviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreviewComponent", function() { return ImagePreviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _image_preview__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./image.preview */ "./src/app/image-preview/image.preview.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");




var ImagePreviewComponent = /** @class */ (function () {
    function ImagePreviewComponent() {
        this.emitter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ImagePreviewComponent.prototype.preview = function (files) {
        var _this = this;
        if (files.length === 0)
            return;
        this.loadingCover = true;
        this.filename = files[0].name;
        this.contentType = files[0].type;
        var reader = new FileReader();
        this.imagePath = files;
        reader.readAsDataURL(files[0]);
        reader.onload = function (_event) {
            _this.imgURL = reader.result;
            var imagePreview = new _image_preview__WEBPACK_IMPORTED_MODULE_2__["ImagePreview"]();
            imagePreview.contentType = _this.contentType;
            imagePreview.fileName = _this.filename;
            imagePreview.imagePath = _this.imagePath;
            imagePreview.imgURL = _this.imgURL;
            _this.emitter.emit(imagePreview);
            _this.loadingCover = false;
        };
    };
    ImagePreviewComponent.prototype.ngOnInit = function () {
    };
    ImagePreviewComponent.prototype.getUrlForDefaultCover = function (defaultImage) {
        return _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backendUrl + '/upload/' + defaultImage;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImagePreviewComponent.prototype, "defaultImage", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ImagePreviewComponent.prototype, "emitter", void 0);
    ImagePreviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-preview',
            template: __webpack_require__(/*! raw-loader!./image-preview.component.html */ "./node_modules/raw-loader/index.js!./src/app/image-preview/image-preview.component.html"),
            styles: [__webpack_require__(/*! ./image-preview.component.css */ "./src/app/image-preview/image-preview.component.css")]
        })
    ], ImagePreviewComponent);
    return ImagePreviewComponent;
}());



/***/ }),

/***/ "./src/app/image-preview/image.preview.ts":
/*!************************************************!*\
  !*** ./src/app/image-preview/image.preview.ts ***!
  \************************************************/
/*! exports provided: ImagePreview */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePreview", function() { return ImagePreview; });
var ImagePreview = /** @class */ (function () {
    function ImagePreview() {
    }
    return ImagePreview;
}());



/***/ }),

/***/ "./src/app/login/authinterceptor.ts":
/*!******************************************!*\
  !*** ./src/app/login/authinterceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


/**
 * @author Nordine Bittich
 */
var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor() {
    }
    AuthInterceptor.prototype.intercept = function (request, next) {
        var xAuthToken = localStorage.getItem('xAuthToken');
        if (xAuthToken && xAuthToken.length) {
            request = request.clone({
                setHeaders: {
                    'x-auth-token': "" + xAuthToken
                }
            });
        }
        return next.handle(request);
    };
    AuthInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/login/errorinterceptor.ts":
/*!*******************************************!*\
  !*** ./src/app/login/errorinterceptor.ts ***!
  \*******************************************/
/*! exports provided: ErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorInterceptor", function() { return ErrorInterceptor; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






/**
 * @author Nordine Bittich
 */
var ErrorInterceptor = /** @class */ (function () {
    function ErrorInterceptor(authenticationService, router, actRoute) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.actRoute = actRoute;
    }
    ErrorInterceptor.prototype.intercept = function (request, next) {
        var _this = this;
        return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err) {
            var errorMessage = err.error ? err.error.message : err.statusText ? err.statusText : 'Server error';
            var errorLabel = 'Unexpected Error';
            if (err.status === 401 || err.status === 403) {
                _this.authenticationService.logout();
                errorLabel = 'Unauthorized';
                errorMessage = 'Forbidden';
                _this.router.navigate(['/error'], {
                    queryParams: { label: errorLabel, status: err.status, message: errorMessage }
                });
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(err);
        }));
    };
    ErrorInterceptor.ctorParameters = function () { return [
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }
    ]; };
    ErrorInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ErrorInterceptor);
    return ErrorInterceptor;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../service/chapter.service */ "./src/app/service/chapter.service.ts");







/**
 * @author Nordine Bittich
 */
var LoginComponent = /** @class */ (function () {
    function LoginComponent(chapterService, actRoute, router, authenticationService) {
        this.chapterService = chapterService;
        this.actRoute = actRoute;
        this.router = router;
        this.authenticationService = authenticationService;
        this.faSignInAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignInAlt"];
        this.faSignOutAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faSignOutAlt"];
    }
    LoginComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.returnUrl = '';
        this.actRoute.queryParams.subscribe(function (params) {
            _this.returnUrl = params['returnUrl'] || '';
        });
        this.fetchCurrentChap();
        this.authenticationService.userEvent.subscribe(function (value) {
            if (value === 'login') {
                _this.fetchCurrentChap();
            }
        });
    };
    LoginComponent.prototype.fetchCurrentChap = function () {
        var _this = this;
        if (this.isLoggedIn()) {
            this.chapterService.getCurrentChapter(function (datas) {
                _this.currentChapter = datas;
            });
        }
    };
    LoginComponent.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    LoginComponent.prototype.getUpdateCurrentTimeUrl = function () {
        if (this.currentChapter && this.currentChapter.chapter)
            return "/user/chapter/" + this.currentChapter.chapter.id + "/current-time?time=";
        else
            return null;
    };
    LoginComponent.prototype.getUser = function () {
        return this.authenticationService.getUser();
    };
    LoginComponent.prototype.logout = function () {
        this.authenticationService.logout();
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.hasRole = function (expected) {
        return this.authenticationService.hasRole(expected);
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.authenticationService.login(this.username, this.password, function (resp) {
            console.log(_this.returnUrl);
            _this.router.navigateByUrl(_this.returnUrl);
        });
    };
    LoginComponent.prototype.getChapterDetailLink = function () {
        var link = '/books/' + _common_slugify__WEBPACK_IMPORTED_MODULE_5__["Slugify"].slugify(this.currentChapter.chapter.title) + '/' + this.currentChapter.chapter.bookId + '/' + 'view';
        return link;
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _service_chapter_service__WEBPACK_IMPORTED_MODULE_6__["ChapterService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/logo/logo.component.css":
/*!*****************************************!*\
  !*** ./src/app/logo/logo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ28vbG9nby5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/logo/logo.component.ts":
/*!****************************************!*\
  !*** ./src/app/logo/logo.component.ts ***!
  \****************************************/
/*! exports provided: LogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoComponent", function() { return LogoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    LogoComponent.prototype.ngOnInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], LogoComponent.prototype, "headerClass", void 0);
    LogoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-logo',
            template: __webpack_require__(/*! raw-loader!./logo.component.html */ "./node_modules/raw-loader/index.js!./src/app/logo/logo.component.html"),
            styles: [__webpack_require__(/*! ./logo.component.css */ "./src/app/logo/logo.component.css")]
        })
    ], LogoComponent);
    return LogoComponent;
}());



/***/ }),

/***/ "./src/app/my-books/my-books.component.css":
/*!*************************************************!*\
  !*** ./src/app/my-books/my-books.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL215LWJvb2tzL215LWJvb2tzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/my-books/my-books.component.ts":
/*!************************************************!*\
  !*** ./src/app/my-books/my-books.component.ts ***!
  \************************************************/
/*! exports provided: MyBooksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyBooksComponent", function() { return MyBooksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../audio-player/audio-player.component */ "./src/app/audio-player/audio-player.component.ts");
/* harmony import */ var _books_book__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../books/book */ "./src/app/books/book.ts");









var MyBooksComponent = /** @class */ (function () {
    function MyBooksComponent(http, router, authenticationService) {
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    MyBooksComponent.prototype.ngOnInit = function () {
        this.getMyBooks(1);
    };
    MyBooksComponent.prototype.newBook = function () {
        return new _books_book__WEBPACK_IMPORTED_MODULE_8__["BookDto"]();
    };
    MyBooksComponent.prototype.delete = function (book, e) {
        var _this = this;
        e.stopPropagation();
        this.http.request('delete', _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + "/book", { body: book }).subscribe(function (datas) {
            _this.getMyBooks(1);
            _this.authenticationService.autoLogin();
            var currentChapterUploadId = (datas.currentChapter || { upload: {} }).upload.id;
            _audio_player_audio_player_component__WEBPACK_IMPORTED_MODULE_7__["AudioPlayerComponent"].reloadCurrentPlayer(currentChapterUploadId, (datas.currentChapter || {}).title);
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    MyBooksComponent.prototype.getMyBooks = function (event) {
        var _this = this;
        this.books = [];
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + '/user/books' + '?size=2&page=' + (event - 1), {}).subscribe(function (datas) {
            _this.books = datas;
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    MyBooksComponent.prototype.linkToBook = function (book, action) {
        return '/books/' + _common_slugify__WEBPACK_IMPORTED_MODULE_6__["Slugify"].slugify(book.title) + '/' + book.id + '/' + action;
    };
    MyBooksComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    MyBooksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-books',
            template: __webpack_require__(/*! raw-loader!./my-books.component.html */ "./node_modules/raw-loader/index.js!./src/app/my-books/my-books.component.html"),
            styles: [__webpack_require__(/*! ./my-books.component.css */ "./src/app/my-books/my-books.component.css")]
        })
    ], MyBooksComponent);
    return MyBooksComponent;
}());



/***/ }),

/***/ "./src/app/navbar/navbar.component.css":
/*!*********************************************!*\
  !*** ./src/app/navbar/navbar.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".bg-grey{\n  background-color: #778899;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWdyZXl7XG4gIGJhY2tncm91bmQtY29sb3I6ICM3Nzg4OTk7XG59XG4iXX0= */"

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
/* harmony import */ var _service_authenticationservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");





var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authenticationService, router, actRoute) {
        this.authenticationService = authenticationService;
        this.router = router;
        this.actRoute = actRoute;
        this.toggleNavbarClass = false;
        this.faHome = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faHome"];
        this.faFileAudio = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faFileAudio"];
        this.faVolumeUp = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVolumeUp"];
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.createMenu();
        this.createExternalLink();
        this.setupRoute();
    };
    NavbarComponent.prototype.createMenu = function () {
        this.menu = [
            { role: ['ANONYMOUS', 'USER', 'ADMIN', 'CONTRIBUTOR'], route: '/', label: 'Home', selected: false, icon: this.faHome },
            { role: ['ADMIN', 'USER', 'ANONYMOUS', 'CONTRIBUTOR'], route: '/books', label: 'Discover', selected: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faVolumeUp"] },
            { role: ['ADMIN', 'USER', 'CONTRIBUTOR'], route: '/my-books', label: 'My Content', selected: false, icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faBook"] }
        ];
    };
    NavbarComponent.prototype.setupRoute = function () {
        var _this = this;
        var defaultMenu = { role: ['ANONYMOUS', 'USER', 'ADMIN'], route: '/', label: 'Home', selected: true, icon: this.faHome };
        this.router.events.subscribe(function (e) {
            _this.currentMenu = defaultMenu;
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["NavigationEnd"]) {
                _this.menu.forEach(function (menu) { return menu.selected = false; });
                var url_1 = e.url;
                var currentMenuList = _this.menu.filter(function (r) { return r.route === url_1; });
                if (currentMenuList && currentMenuList.length > 0) {
                    var m = currentMenuList[0];
                    m.selected = true;
                    _this.currentMenu = m;
                }
            }
        });
    };
    NavbarComponent.prototype.click = function (item) {
        this.menu.forEach(function (x) { return x.selected = false; });
        this.currentMenu = item;
        this.currentMenu.selected = true;
    };
    NavbarComponent.prototype.toggleNavbar = function () {
        this.toggleNavbarClass = !this.toggleNavbarClass;
    };
    NavbarComponent.prototype.toggleNavbarShow = function () {
        if (this.toggleNavbarClass) {
            return 'collapse navbar-collapse show ';
        }
        return 'collapse navbar-collapse';
    };
    NavbarComponent.prototype.hasRole = function (expected) {
        return this.authenticationService.hasRole(expected);
    };
    NavbarComponent.prototype.createExternalLink = function () {
        this.externalLink = [
        // {role: ['ADMIN'], route: '/proxy/aggregator/management', label: 'Management'},
        //{role: ['ADMIN'], route: '/proxy/metrics/aggregator', label: 'Metrics'},
        //{role: ['ADMIN'], route: '/proxy/robot/', label: 'Robot'}
        ];
    };
    NavbarComponent.ctorParameters = function () { return [
        { type: _service_authenticationservice__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
    ]; };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/navbar/navbar.component.css")]
        })
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/service/authenticationservice.ts":
/*!**************************************************!*\
  !*** ./src/app/service/authenticationservice.ts ***!
  \**************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






/**
 * @author Nordine Bittich
 */
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http) {
        this.http = http;
        this.userEvent = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    AuthenticationService.prototype.autoLogin = function (sendEvent) {
        var _this = this;
        if (sendEvent === void 0) { sendEvent = false; }
        this.http.request('post', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/user/info', {}).subscribe(function (datas) {
            _this.setUser(datas, sendEvent);
        }, function (err) {
            console.log(err);
        }, function () {
        });
    };
    AuthenticationService.prototype.setUser = function (datas, sendEvent) {
        if (sendEvent === void 0) { sendEvent = true; }
        localStorage.setItem('user', JSON.stringify(datas));
        if (sendEvent)
            this.userEvent.next("login");
    };
    AuthenticationService.prototype.login = function (username, password, callBackNext, callbackError, callbackComplete) {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json',
            'X-Requested-With': 'XMLHttpRequest',
            'Authorization': 'Basic ' + window.btoa(username + ':' + password)
        });
        return this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/user/info', {}, {
            headers: headers,
            observe: 'response'
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (resp) {
            var token = resp.headers.get('X-Auth-Token');
            console.log(token);
            if (token && token.length) {
                localStorage.setItem('xAuthToken', token);
                _this.setUser(resp.body);
            }
            return resp;
        })).subscribe(function (datas) {
            if (callBackNext)
                callBackNext(datas);
        }, function (err) {
            if (callbackError)
                callbackError(err);
        }, function () {
            if (callbackComplete)
                callbackComplete();
        });
    };
    AuthenticationService.prototype.getUser = function () {
        var user = localStorage.getItem('user');
        return user && user.length ? JSON.parse(user) : null;
    };
    AuthenticationService.prototype.hasRole = function (expectedRole) {
        var user = this.getUser() || { authorities: [{ authority: 'ANONYMOUS' }] };
        var authorities = user.authorities || [{ authority: 'ANONYMOUS' }];
        return expectedRole.some(function (r) { return authorities.map(function (a) { return a.authority.toLowerCase(); }).includes(r.toLowerCase()); });
    };
    AuthenticationService.prototype.hasRight = function (entityFromUser) {
        return (entityFromUser || { username: 'ERROR' }).username === (this.getUser() || { username: 'ANONYMOUS' }).username;
    };
    AuthenticationService.prototype.hasAnyRole = function () {
        var _this = this;
        var expected = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            expected[_i] = arguments[_i];
        }
        return expected.filter(function (e) { return _this.hasRole([e]); }).length > 0;
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('xAuthToken');
        localStorage.removeItem('user');
        this.userEvent.next("logout");
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        return this.getUser() !== null;
    };
    AuthenticationService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/service/authguardservice.ts":
/*!*********************************************!*\
  !*** ./src/app/service/authguardservice.ts ***!
  \*********************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticationservice */ "./src/app/service/authenticationservice.ts");




/**
 * @author Nordine Bittich
 */
var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var expectedRole = route.data.expectedRole || 'ANONYMOUS';
        if (this.auth.hasRole(expectedRole)) {
            return true;
        }
        this.router.navigate(['/error'], {
            queryParams: { label: 'Unauthorized', status: 401, message: 'Forbidden access', returnUrl: state.url }
        });
        return false;
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/service/book.service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/book.service.ts ***!
  \*****************************************/
/*! exports provided: BookService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BookService", function() { return BookService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _common_slugify__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/slugify */ "./src/app/common/slugify.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");







var BookService = /** @class */ (function () {
    function BookService(http, router, authenticationService) {
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    BookService.prototype.getBooks = function (next, event, pageSize, err) {
        if (next === void 0) { next = function (datas) { return console.log(datas); }; }
        if (event === void 0) { event = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book?size=" + pageSize + "&page=" + (event - 1), {}).subscribe(next, err, function () {
        });
    };
    BookService.prototype.searchBookByTitle = function (title, next, page, pageSize, err) {
        if (next === void 0) { next = function (datas) { return console.log(datas); }; }
        if (page === void 0) { page = 1; }
        if (pageSize === void 0) { pageSize = 10; }
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/search/title?size=" + pageSize + "&page=" + (page - 1), {
            params: {
                'title': title
            }
        }).subscribe(next, err, function () {
        });
    };
    BookService.prototype.fetchTitles = function (next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/titles", {}).subscribe(next, err, function () {
        });
    };
    BookService.prototype.getTotalDuration = function (book) {
        return Math.round(book.totalDuration / 1000 / 60) + ' minutes';
    };
    BookService.prototype.bookDetailFor = function (book, editMode) {
        this.router.navigateByUrl('/books/' + _common_slugify__WEBPACK_IMPORTED_MODULE_5__["Slugify"].slugify(book.title) + '/' + book.id + '/' + editMode);
    };
    BookService.prototype.fetchCountryCode = function (next, e) {
        if (e === void 0) { e = function (err) { return console.log(err); }; }
        this.http.request('get', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/country-code", {}).subscribe(next, e, function () {
        });
    };
    BookService.prototype.saveBookToDb = function (book, next, error) {
        if (error === void 0) { error = function (e) { return console.log(e); }; }
        this.http.request('put', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book", { body: book }).subscribe(next, error, function () {
        });
    };
    BookService.prototype.fetchBook = function (id, title, next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.request('get', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/" + title + "/" + id, {}).subscribe(next, err, function () {
        });
    };
    BookService.prototype.rateBook = function ($event, book, next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        console.log("from book detail " + $event.star);
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]()
            .set('bookId', book.id + '')
            .set('star', $event.star + '');
        this.http.request('post', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/user/rate", {
            params: params
        }).subscribe(next, err, function () {
        });
    };
    BookService.prototype.getLast3Books = function (next) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/book/last', {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    BookService.prototype.getTop3Books = function (next) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/book/top', {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    BookService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
        { type: _authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    BookService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], BookService);
    return BookService;
}());



/***/ }),

/***/ "./src/app/service/chapter.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/chapter.service.ts ***!
  \********************************************/
/*! exports provided: ChapterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChapterService", function() { return ChapterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _authenticationservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");






var ChapterService = /** @class */ (function () {
    function ChapterService(http, router, authenticationService) {
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    ChapterService.prototype.updateChapter = function (chap, next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.request('post', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/chapter/edit", { body: chap }).subscribe(next, err, function () {
        });
    };
    ChapterService.prototype.updateCurrentChapter = function (chapter, next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.request('post', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/user/chapter/update/current", { params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('chapterId', chapter.id) }).subscribe(next, err, function () {
        });
    };
    ChapterService.prototype.publish = function (newChapter, next, err) {
        if (err === void 0) { err = function (e) { return console.log(e); }; }
        this.http.request('put', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/chapter/publish", { body: newChapter }).subscribe(next, err, function () {
        });
    };
    ChapterService.prototype.deleteChapter = function (ch, next) {
        this.http.request('delete', _environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/chapter/" + ch.id, {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ChapterService.prototype.getChapters = function (event, bookId, next, pageSize) {
        if (pageSize === void 0) { pageSize = 3; }
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/book/" + bookId + "/chapters?size=" + pageSize + "&page=" + (event - 1), {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ChapterService.prototype.getCurrentChapter = function (next) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + "/user/chapter/current", {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ChapterService.prototype.userHistory = function (next) {
        this.http.get(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].backendUrl + '/user/chapter/history', {}).subscribe(next, function (err) {
            console.log(err);
        }, function () {
        });
    };
    ChapterService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
        { type: _authenticationservice__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }
    ]; };
    ChapterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], ChapterService);
    return ChapterService;
}());



/***/ }),

/***/ "./src/app/service/updatecurrenttimeservice.ts":
/*!*****************************************************!*\
  !*** ./src/app/service/updatecurrenttimeservice.ts ***!
  \*****************************************************/
/*! exports provided: UpdateCurrentTimeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateCurrentTimeService", function() { return UpdateCurrentTimeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _authenticationservice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./authenticationservice */ "./src/app/service/authenticationservice.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");






var UpdateCurrentTimeService = /** @class */ (function () {
    function UpdateCurrentTimeService(http, router, authenticationService) {
        this.http = http;
        this.router = router;
        this.authenticationService = authenticationService;
    }
    UpdateCurrentTimeService.prototype.updateTime = function (url, currentT) {
        this.http.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].backendUrl + url + currentT, {}).subscribe(function (datas) {
        }, function (err) {
        }, function () {
        });
    };
    UpdateCurrentTimeService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
        { type: _authenticationservice__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] }
    ]; };
    UpdateCurrentTimeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' })
    ], UpdateCurrentTimeService);
    return UpdateCurrentTimeService;
}());



/***/ }),

/***/ "./src/app/stars/star.ts":
/*!*******************************!*\
  !*** ./src/app/stars/star.ts ***!
  \*******************************/
/*! exports provided: Star */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Star", function() { return Star; });
var Star = /** @class */ (function () {
    function Star() {
    }
    return Star;
}());



/***/ }),

/***/ "./src/app/stars/stars.component.css":
/*!*******************************************!*\
  !*** ./src/app/stars/stars.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3N0YXJzL3N0YXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/stars/stars.component.ts":
/*!******************************************!*\
  !*** ./src/app/stars/stars.component.ts ***!
  \******************************************/
/*! exports provided: StarsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StarsComponent", function() { return StarsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _star__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./star */ "./src/app/stars/star.ts");




var StarsComponent = /** @class */ (function () {
    function StarsComponent() {
        this.faStar = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStar"];
        this.faStarHalfAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_2__["faStarHalfAlt"];
        this.star = [];
        this.updateStar = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.inputStar = new _star__WEBPACK_IMPORTED_MODULE_3__["Star"]();
    }
    StarsComponent.prototype.ngOnInit = function () {
    };
    StarsComponent.prototype.getIcon = function (i) {
        if (!this.star || !this.star.length) {
            return ['far', 'star'];
        }
        var temp = this.star.map(function (s) { return s.star; }).reduce(function (previousValue, currentValue) { return previousValue + currentValue; }) / this.star.length;
        return this.getIconFromCurr(i, temp);
    };
    StarsComponent.prototype.getIconFromCurr = function (i, curr) {
        if (!curr) {
            return ['far', 'star'];
        }
        var st = Math.round(curr * 2) / 2;
        if (st < i) {
            if (st + 0.5 === i) {
                return ['fas', 'star-half-alt'];
            }
            else {
                return ['far', 'star'];
            }
        }
        else {
            return ['fas', 'star'];
        }
    };
    StarsComponent.prototype.updateRating = function (i) {
        var s = new _star__WEBPACK_IMPORTED_MODULE_3__["Star"]();
        s.star = i;
        this.inputStar = s;
    };
    StarsComponent.prototype.emitVote = function () {
        if (!this.inputStar.star) {
            this.inputStar.star = 0;
        }
        this.updateStar.emit(this.inputStar);
        this.inputStar = new _star__WEBPACK_IMPORTED_MODULE_3__["Star"]();
        this.editMode = !this.editMode;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StarsComponent.prototype, "star", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], StarsComponent.prototype, "updateStar", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], StarsComponent.prototype, "editable", void 0);
    StarsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stars',
            template: __webpack_require__(/*! raw-loader!./stars.component.html */ "./node_modules/raw-loader/index.js!./src/app/stars/stars.component.html"),
            styles: [__webpack_require__(/*! ./stars.component.css */ "./src/app/stars/stars.component.css")]
        })
    ], StarsComponent);
    return StarsComponent;
}());



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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    backendUrl: 'http://localhost:8070'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


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

module.exports = __webpack_require__(/*! /home/artcoded/IdeaProjects/boost/boost-frontend/src/main/web/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map