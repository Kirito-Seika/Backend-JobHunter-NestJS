'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">JobHunter-NestJS documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' : 'data-bs-target="#xs-controllers-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' :
                                            'id="xs-controllers-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' : 'data-bs-target="#xs-injectables-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' :
                                        'id="xs-injectables-links-module-AppModule-4aa923b8b5c789f44e2fb0cd7b816e59b74b1ef6884f83df231983653e8926d9cf1cbf0005607f3c239b4f2d81614e4c069c3d46c2a28288df3e0b85028d6950"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' :
                                            'id="xs-controllers-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' :
                                        'id="xs-injectables-links-module-AuthModule-ca94aadd509ef2e6c88e3400cef8d2a1526eca00d61232892d923fcb56bd9fdf014352060510f2d682d8dd6e1655d5c8b410698bd00cc7a3a6f75d097c6f63e9"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/JwtStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JwtStrategy</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/LocalStrategy.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >LocalStrategy</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/CompaniesModule.html" data-type="entity-link" >CompaniesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' : 'data-bs-target="#xs-controllers-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' :
                                            'id="xs-controllers-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' }>
                                            <li class="link">
                                                <a href="controllers/CompaniesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' : 'data-bs-target="#xs-injectables-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' :
                                        'id="xs-injectables-links-module-CompaniesModule-0eaa420c91be3d286cd95c1f1221f8110851751c05afdc120ff53b34995a1b42f7b3b27923997f88d62be163689a96c97652748fc9d4dc676d83928d7a3865bf"' }>
                                        <li class="link">
                                            <a href="injectables/CompaniesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >CompaniesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatabasesModule.html" data-type="entity-link" >DatabasesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' : 'data-bs-target="#xs-controllers-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' :
                                            'id="xs-controllers-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' }>
                                            <li class="link">
                                                <a href="controllers/DatabasesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' : 'data-bs-target="#xs-injectables-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' :
                                        'id="xs-injectables-links-module-DatabasesModule-b1956bab56581ade9638f7052ea16392cf9bdb144e88a7c5785118381b748acb70ad1c90f431947da8d81aa11878e15cddaa761dedc95bdd3a32a3b47051e887"' }>
                                        <li class="link">
                                            <a href="injectables/DatabasesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >DatabasesService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/FilesModule.html" data-type="entity-link" >FilesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' : 'data-bs-target="#xs-controllers-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' :
                                            'id="xs-controllers-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' }>
                                            <li class="link">
                                                <a href="controllers/FilesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' : 'data-bs-target="#xs-injectables-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' :
                                        'id="xs-injectables-links-module-FilesModule-7b9c8aa8705a4bdd1352537df624ea192fe43b2461b4f3337f6b15adf4c3e75721032b761b38cd740e478ebbbaf9cf65fead2046f5354727cfaedc136962e578"' }>
                                        <li class="link">
                                            <a href="injectables/FilesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >FilesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HealthModule.html" data-type="entity-link" >HealthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-HealthModule-aa59b26121fbebfa865a8e79c8c785f914399682ff5dbad6c60ea4ffb06b93d5746fdaed0554d78efdc4c2a333696f28d8618d3dd092555b94819f571e533cca"' : 'data-bs-target="#xs-controllers-links-module-HealthModule-aa59b26121fbebfa865a8e79c8c785f914399682ff5dbad6c60ea4ffb06b93d5746fdaed0554d78efdc4c2a333696f28d8618d3dd092555b94819f571e533cca"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-HealthModule-aa59b26121fbebfa865a8e79c8c785f914399682ff5dbad6c60ea4ffb06b93d5746fdaed0554d78efdc4c2a333696f28d8618d3dd092555b94819f571e533cca"' :
                                            'id="xs-controllers-links-module-HealthModule-aa59b26121fbebfa865a8e79c8c785f914399682ff5dbad6c60ea4ffb06b93d5746fdaed0554d78efdc4c2a333696f28d8618d3dd092555b94819f571e533cca"' }>
                                            <li class="link">
                                                <a href="controllers/HealthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >HealthController</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/JobsModule.html" data-type="entity-link" >JobsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' : 'data-bs-target="#xs-controllers-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' :
                                            'id="xs-controllers-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' }>
                                            <li class="link">
                                                <a href="controllers/JobsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' : 'data-bs-target="#xs-injectables-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' :
                                        'id="xs-injectables-links-module-JobsModule-b66a38e07dc79de35c5fbc14f9a54cca747f0a417c1e432abfcb67bfb58ea6fa84271dc3f7227e5ae44d3fe756e36beff8ddf2de829621602f307dc73e7f235c"' }>
                                        <li class="link">
                                            <a href="injectables/JobsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >JobsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/MailModule.html" data-type="entity-link" >MailModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' : 'data-bs-target="#xs-controllers-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' :
                                            'id="xs-controllers-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' }>
                                            <li class="link">
                                                <a href="controllers/MailController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' : 'data-bs-target="#xs-injectables-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' :
                                        'id="xs-injectables-links-module-MailModule-3d272bc7f39be7f840b1febf22fbdc490597d5907cb13b11dbcbdcbb2e8ce36ce6cd9774e207cdceec6384ad10ccf77d94b23fa2e81e11d1b661a8f0ef391230"' }>
                                        <li class="link">
                                            <a href="injectables/MailService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >MailService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PermissionsModule.html" data-type="entity-link" >PermissionsModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' : 'data-bs-target="#xs-controllers-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' :
                                            'id="xs-controllers-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' }>
                                            <li class="link">
                                                <a href="controllers/PermissionsController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' : 'data-bs-target="#xs-injectables-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' :
                                        'id="xs-injectables-links-module-PermissionsModule-cd0c5880205658981efe8856c860ba4071a1879bbbd7b8c2753bf26c1ac1decb63a1509da44b5975b9ada49b28c152099bd07d2a6c9e941fef7c302a57cd399c"' }>
                                        <li class="link">
                                            <a href="injectables/PermissionsService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PermissionsService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/ResumesModule.html" data-type="entity-link" >ResumesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' : 'data-bs-target="#xs-controllers-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' :
                                            'id="xs-controllers-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' }>
                                            <li class="link">
                                                <a href="controllers/ResumesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' : 'data-bs-target="#xs-injectables-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' :
                                        'id="xs-injectables-links-module-ResumesModule-92c2aef5985b610265e9e39931bf1a7326b54b6519c3eb8736f2f17e44dce8dc888512b919d98acd7e46cc2df47d51cb0b3f2d281529ae1524ac703c2e5ded50"' }>
                                        <li class="link">
                                            <a href="injectables/ResumesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >ResumesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/RolesModule.html" data-type="entity-link" >RolesModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' : 'data-bs-target="#xs-controllers-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' :
                                            'id="xs-controllers-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' }>
                                            <li class="link">
                                                <a href="controllers/RolesController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' : 'data-bs-target="#xs-injectables-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' :
                                        'id="xs-injectables-links-module-RolesModule-32079646adbdc20949413f9f71e7d89997348734ac175a0d524db28587c523403bece3f65d019b7e1d75fb1bbfd25d8c77516501d26f67f68603c1b4d826fc86"' }>
                                        <li class="link">
                                            <a href="injectables/RolesService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >RolesService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SubscribersModule.html" data-type="entity-link" >SubscribersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' : 'data-bs-target="#xs-controllers-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' :
                                            'id="xs-controllers-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' }>
                                            <li class="link">
                                                <a href="controllers/SubscribersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' : 'data-bs-target="#xs-injectables-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' :
                                        'id="xs-injectables-links-module-SubscribersModule-0eeb5ddb3a8b2cfaecdb4af68d3a168a9ecc2b2e2d380a0a73ae16868f78e1b8cadfbed978a4a516ddbd19a6f2cfe54b51781764d6408aede253ff23b5a1c3cd"' }>
                                        <li class="link">
                                            <a href="injectables/SubscribersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >SubscribersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UsersModule.html" data-type="entity-link" >UsersModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' : 'data-bs-target="#xs-controllers-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' :
                                            'id="xs-controllers-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' }>
                                            <li class="link">
                                                <a href="controllers/UsersController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' : 'data-bs-target="#xs-injectables-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' :
                                        'id="xs-injectables-links-module-UsersModule-3b0b328261249269886dda126ee462650a791ea29eac2b890ff41a685311fbe48ea5a53e93ac6c65c6e3210e22b66deb3a3ba4e0c410bc353016226ec9b0278e"' }>
                                        <li class="link">
                                            <a href="injectables/UsersService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UsersService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/CompaniesController.html" data-type="entity-link" >CompaniesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/DatabasesController.html" data-type="entity-link" >DatabasesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/FilesController.html" data-type="entity-link" >FilesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/HealthController.html" data-type="entity-link" >HealthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/JobsController.html" data-type="entity-link" >JobsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/MailController.html" data-type="entity-link" >MailController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PermissionsController.html" data-type="entity-link" >PermissionsController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/ResumesController.html" data-type="entity-link" >ResumesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/RolesController.html" data-type="entity-link" >RolesController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/SubscribersController.html" data-type="entity-link" >SubscribersController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UsersController.html" data-type="entity-link" >UsersController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Company.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-1.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/Company-2.html" data-type="entity-link" >Company</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateCompanyDto.html" data-type="entity-link" >CreateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateFileDto.html" data-type="entity-link" >CreateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateJobDto.html" data-type="entity-link" >CreateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePermissionDto.html" data-type="entity-link" >CreatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateResumeDto.html" data-type="entity-link" >CreateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateRoleDto.html" data-type="entity-link" >CreateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateSubscriberDto.html" data-type="entity-link" >CreateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserCvDto.html" data-type="entity-link" >CreateUserCvDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDto.html" data-type="entity-link" >CreateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/File.html" data-type="entity-link" >File</a>
                            </li>
                            <li class="link">
                                <a href="classes/History.html" data-type="entity-link" >History</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsActiveValidConstraint.html" data-type="entity-link" >IsActiveValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsAddressValidConstraint.html" data-type="entity-link" >IsAddressValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsAgeValidConstraint.html" data-type="entity-link" >IsAgeValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsCompanyIdValidConstraint.html" data-type="entity-link" >IsCompanyIdValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEmailValidConstraint.html" data-type="entity-link" >IsEmailValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEmailValidConstraint-1.html" data-type="entity-link" >IsEmailValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsEndDateValidConstraint.html" data-type="entity-link" >IsEndDateValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsGenderValidConstraint.html" data-type="entity-link" >IsGenderValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsJobIdValidConstraint.html" data-type="entity-link" >IsJobIdValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNameValidConstraint.html" data-type="entity-link" >IsNameValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNameValidConstraint-1.html" data-type="entity-link" >IsNameValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsNameValidConstraint-2.html" data-type="entity-link" >IsNameValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsPasswordValidConstraint.html" data-type="entity-link" >IsPasswordValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsPhoneValidConstraint.html" data-type="entity-link" >IsPhoneValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsQuantityValidConstraint.html" data-type="entity-link" >IsQuantityValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsSalaryValidConstraint.html" data-type="entity-link" >IsSalaryValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsSkillValidConstraint.html" data-type="entity-link" >IsSkillValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsStartDateValidConstraint.html" data-type="entity-link" >IsStartDateValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/IsUserIdValidConstraint.html" data-type="entity-link" >IsUserIdValidConstraint</a>
                            </li>
                            <li class="link">
                                <a href="classes/Job.html" data-type="entity-link" >Job</a>
                            </li>
                            <li class="link">
                                <a href="classes/Permission.html" data-type="entity-link" >Permission</a>
                            </li>
                            <li class="link">
                                <a href="classes/RegisterUserDto.html" data-type="entity-link" >RegisterUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/Resume.html" data-type="entity-link" >Resume</a>
                            </li>
                            <li class="link">
                                <a href="classes/Role.html" data-type="entity-link" >Role</a>
                            </li>
                            <li class="link">
                                <a href="classes/Subscriber.html" data-type="entity-link" >Subscriber</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateCompanyDto.html" data-type="entity-link" >UpdateCompanyDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatedBy.html" data-type="entity-link" >UpdatedBy</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateFileDto.html" data-type="entity-link" >UpdateFileDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateJobDto.html" data-type="entity-link" >UpdateJobDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdatePermissionDto.html" data-type="entity-link" >UpdatePermissionDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateResumeDto.html" data-type="entity-link" >UpdateResumeDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateRoleDto.html" data-type="entity-link" >UpdateRoleDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateSubscriberDto.html" data-type="entity-link" >UpdateSubscriberDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/UpdateUserDto.html" data-type="entity-link" >UpdateUserDto</a>
                            </li>
                            <li class="link">
                                <a href="classes/User.html" data-type="entity-link" >User</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/CompaniesService.html" data-type="entity-link" >CompaniesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/DatabasesService.html" data-type="entity-link" >DatabasesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/FilesService.html" data-type="entity-link" >FilesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JobsService.html" data-type="entity-link" >JobsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtAuthGuard.html" data-type="entity-link" >JwtAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/JwtStrategy.html" data-type="entity-link" >JwtStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalAuthGuard.html" data-type="entity-link" >LocalAuthGuard</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LocalStrategy.html" data-type="entity-link" >LocalStrategy</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MailService.html" data-type="entity-link" >MailService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MulterConfigService.html" data-type="entity-link" >MulterConfigService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PermissionsService.html" data-type="entity-link" >PermissionsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/ResumesService.html" data-type="entity-link" >ResumesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/RolesService.html" data-type="entity-link" >RolesService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SubscribersService.html" data-type="entity-link" >SubscribersService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/TransformInterceptor.html" data-type="entity-link" >TransformInterceptor</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UsersService.html" data-type="entity-link" >UsersService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#interfaces-links"' :
                            'data-bs-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/IUser.html" data-type="entity-link" >IUser</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Response.html" data-type="entity-link" >Response</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/typealiases.html" data-type="entity-link">Type aliases</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});