import { AfterViewInit, Component, ElementRef, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { CKEditor5 } from '@ckeditor/ckeditor5-angular';
import * as Editor from '@/../ckeditor5/build/ckeditor.js';
import { getLoadSaveIntegration } from './load-save-integration';

@Component({
  selector: 'app-revision-history-track-change',
  templateUrl: './revision-history-track-change.component.html',
  styleUrls: ['./revision-history-track-change.component.scss']
})
export class RevisionHistoryTrackChangeComponent implements AfterViewInit, OnDestroy {

  @Output() public ready = new EventEmitter<CKEditor5.Editor>();
  @ViewChild('sidebar', { static: true }) private sidebarContainer?: ElementRef<HTMLDivElement>;
  public Editor = Editor;
  public editor?: CKEditor5.Editor;

  public data = this.getInitialData();

  public get editorConfig() {
    return {
      extraPlugins: [
        getLoadSaveIntegration(this.appData)
      ],
      sidebar: {
        container: this.sidebar
      },
      licenseKey: this.licenseKey,
      revisionHistory: {
        editorContainer: document.querySelector('#editor-container'),
        viewerContainer: document.querySelector('#revision-viewer-container'),
        viewerEditorElement: document.querySelector('#revision-viewer-editor'),
        viewerSidebarContainer: document.querySelector('#revision-viewer-sidebar')
      },
    };
  }



  private readonly STORAGE_KEY = 'ckeditor-license-key';
  private licenseKey = '';
  // Application data will be available under a global variable `appData`.
  private appData = {
    // The ID of the current user.
    userId: 'user-1',
    // Users data.
    users: [
      {
        id: 'u1',
        name: 'Joe Doe',
        // Note that the avatar is optional.
        avatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'
      },
      {
        id: 'user-1',
        name: 'Joe Doe',
        // Note that the avatar is optional.
        avatar: 'https://randomuser.me/api/portraits/thumb/men/26.jpg'
      },
      {
        id: 'user-2',
        name: 'Ella Harper',
        avatar: 'https://randomuser.me/api/portraits/thumb/women/65.jpg'
      }
    ],
    // Suggestion threads data.
    suggestions: [
      {
        id: 'suggestion-1',
        type: 'insertion',
        authorId: 'user-2',
        createdAt: new Date(2019, 1, 13, 11, 20, 48)
      },
      {
        id: 'suggestion-2',
        type: 'deletion',
        authorId: 'user-1',
        createdAt: new Date(2019, 1, 14, 12, 7, 20)
      },
      {
        id: 'suggestion-3',
        type: 'insertion',
        authorId: 'user-1',
        createdAt: new Date(2019, 1, 14, 12, 7, 20)
      },
      {
        id: 'suggestion-4',
        type: 'deletion',
        authorId: 'user-1',
        createdAt: new Date(2019, 1, 15, 8, 44, 1)
      },
      {
        id: 'suggestion-5',
        type: 'formatInline:886cqig6g8rf',
        authorId: 'user-2',
        createdAt: new Date(2019, 2, 8, 10, 2, 7),
        data: {
          commandName: 'bold',
          commandParams: [{ forceValue: true }]
        }
      },
      {
        id: 'suggestion-6',
        type: 'formatBlock:698dn3otqzd6',
        authorId: 'user-2',
        createdAt: new Date(2019, 2, 8, 10, 2, 10),
        data: {
          commandName: 'heading',
          commandParams: [{ value: 'heading2' }],
          formatGroupId: 'blockName',
          multipleBlocks: false
        }
      }
    ],
    // Comment threads data.
    commentThreads: [
      {
        threadId: 'suggestion-1',
        comments: [
          {
            commentId: 'comment-1',
            authorId: 'user-1',
            content: '<p>Are you sure it will fit here?</p>',
            createdAt: new Date('09/20/2018 14:21:53')
          },
          {
            commentId: 'comment-2',
            authorId: 'user-2',
            content: '<p>I think so...</p>',
            createdAt: new Date('09/21/2018 08:17:01')
          }
        ]
      }
    ],
    // Revisions data.
    revisions: [
      {
        'id': 'initial',
        'name': 'Initial revision',
        'creatorId': 'u1',
        'authorsIds': ['u1'],
        'diffData': {
          'main': {
            'insertions': '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]',
            'deletions': '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ………… by and between The Lower Shelf, the “Publisher”, and …………, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him/herself and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A."]}]'
          }
        },
        'createdAt': '2021-05-27T13:22:59.077Z',
        'attributes': {},
        'fromVersion': 1,
        'toVersion': 1
      },
      {
        'id': 'e6f80e6be6ee6057fd5a449ab13fba25d',
        'name': 'Updated with the actual data',
        'creatorId': 'u1',
        'authorsIds': ['u1'],
        'diffData': {
          'main': {
            'insertions': '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ",{"name":"revision-start","attributes":[["name","insertion:u1:0"]],"children":[]},"1th",{"name":"revision-end","attributes":[["name","insertion:u1:0"]],"children":[]}," ",{"name":"revision-start","attributes":[["name","insertion:u1:1"]],"children":[]},"June 2020 ",{"name":"revision-end","attributes":[["name","insertion:u1:1"]],"children":[]},"by and between The Lower Shelf, the “Publisher”, and ",{"name":"revision-start","attributes":[["name","insertion:u1:2"]],"children":[]},"John Smith",{"name":"revision-end","attributes":[["name","insertion:u1:2"]],"children":[]},", the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
            'deletions': '[{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of ",{"name":"revision-start","attributes":[["name","deletion:u1:0"]],"children":[]},"…………",{"name":"revision-end","attributes":[["name","deletion:u1:0"]],"children":[]}," by and between The Lower Shelf, the “Publisher”, and ",{"name":"revision-start","attributes":[["name","deletion:u1:1"]],"children":[]},"…………",{"name":"revision-end","attributes":[["name","deletion:u1:1"]],"children":[]},", the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him",{"name":"revision-start","attributes":[["name","deletion:u1:2"]],"children":[]},"/herself",{"name":"revision-end","attributes":[["name","deletion:u1:2"]],"children":[]}," and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature.",{"name":"revision-start","attributes":[["name","deletion:u1:3"]],"children":[]}]},{"name":"p","attributes":[],"children":["Publishing formats are enumerated in Appendix A.",{"name":"revision-end","attributes":[["name","deletion:u1:3"]],"children":[]}]}]'
          }
        },
        'createdAt': '2021-05-27T13:23:52.553Z',
        'attributes': {},
        'fromVersion': 1,
        'toVersion': 20
      },
      {
        'id': 'e6590c50ccbc86acacb7d27231ad32064',
        'name': 'Inserted logo',
        'creatorId': 'u1',
        'authorsIds': ['u1'],
        'diffData': {
          'main': {
            'insertions': '[{"name":"figure","attributes":[["data-revision-start-before","insertion:u1:0"],["class","image"]],"children":[{"name":"img","attributes":[["src","assets/images/revision-history-demo.png"]],"children":[]}]},{"name":"h1","attributes":[],"children":[{"name":"revision-end","attributes":[["name","insertion:u1:0"]],"children":[]},"PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1th June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
            'deletions': '[{"name":"h1","attributes":[["data-revision-start-before","deletion:u1:0"]],"children":[{"name":"revision-end","attributes":[["name","deletion:u1:0"]],"children":[]},"PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1th June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]'
          }
        },
        'createdAt': '2021-05-27T13:26:39.252Z',
        'attributes': {},
        'fromVersion': 20,
        'toVersion': 24
      },
      // Empty current revision:
      {
        'id': 'egh91t5jccbi894cacxx7dz7t36aj3k021',
        'name': null,
        'creatorId': null,
        'authorsIds': [],
        'diffData': {
          'main': {
            'insertions': '[{"name":"figure","attributes":[["class","image"]],"children":[{"name":"img","attributes":[["src","assets/images/revision-history-demo.png"]],"children":[]}]},{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1th June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]',
            'deletions': '[{"name":"figure","attributes":[["class","image"]],"children":[{"name":"img","attributes":[["src","assets/images/revision-history-demo.png"]],"children":[]}]},{"name":"h1","attributes":[],"children":["PUBLISHING AGREEMENT"]},{"name":"h3","attributes":[],"children":["Introduction"]},{"name":"p","attributes":[],"children":["This publishing contract, the “contract”, is entered into as of 1th June 2020 by and between The Lower Shelf, the “Publisher”, and John Smith, the “Author”."]},{"name":"h3","attributes":[],"children":["Grant of Rights"]},{"name":"p","attributes":[],"children":["The Author grants the Publisher full right and title to the following, in perpetuity:"]},{"name":"ul","attributes":[],"children":[{"name":"li","attributes":[],"children":["To publish, sell, and profit from the listed works in all languages and formats in existence today and at any point in the future."]},{"name":"li","attributes":[],"children":["To create or devise modified, abridged, or derivative works based on the works listed."]},{"name":"li","attributes":[],"children":["To allow others to use the listed works at their discretion, without providing additional compensation to the Author."]}]},{"name":"p","attributes":[],"children":["These rights are granted by the Author on behalf of him and their successors, heirs, executors, and any other party who may attempt to lay claim to these rights at any point now or in the future."]},{"name":"p","attributes":[],"children":["Any rights not granted to the Publisher above remain with the Author."]},{"name":"p","attributes":[],"children":["The rights granted to the Publisher by the Author shall not be constrained by geographic territories and are considered global in nature."]}]'
          }
        },
        'createdAt': '2021-05-27T13:26:39.252Z',
        'attributes': {},
        'fromVersion': 24,
        'toVersion': 24
      }
    ]
  };

  // Note that Angular refs can be used once the view is initialized so we need to create
  // this container and use in the above editor configuration to work around this problem.
  private sidebar = document.createElement('div');

  private boundRefreshDisplayMode = this.refreshDisplayMode.bind(this);
  private boundCheckPendingActions = this.checkPendingActions.bind(this);

  constructor() { }
  ngAfterViewInit(): void {
    if (!this.sidebarContainer) {
      throw new Error('Div container for sidebar was not found');
    }

    this.sidebarContainer.nativeElement.appendChild(this.sidebar);
  }
  ngOnDestroy(): void {
    window.removeEventListener('resize', this.boundRefreshDisplayMode);
    window.removeEventListener('beforeunload', this.boundCheckPendingActions);
  }

  ngOnInit(): void {

    (window as any).CKBox = this.Editor.CKBox;
    // Save the provided license key in the local storage.
    this.licenseKey = window.localStorage.getItem(this.STORAGE_KEY) || window.prompt('Your license key');
    window.localStorage.setItem(this.STORAGE_KEY, this.licenseKey);
  }

  public onReady(editor: CKEditor5.Editor): void {
    this.editor = editor;
    this.ready.emit(editor);

    // Make the track changes mode the "default" state by turning it on right after the editor initializes.
    this.editor.execute('trackChanges');

    // Prevent closing the tab when any action is pending.
    window.addEventListener('beforeunload', this.boundCheckPendingActions);

    // Switch between inline and sidebar annotations according to the window size.
    window.addEventListener('resize', this.boundRefreshDisplayMode);
    this.refreshDisplayMode();
  }

  public showEditorDataInConsole(evt): void {
    const editorData = this.editor.data.get();

    const trackChanges = this.editor.plugins.get('TrackChanges');
    const comments = this.editor.plugins.get('CommentsRepository');
    const revisionsRepositoryPlugin = this.editor.plugins.get('RevisionsRepository');

    const revisionsData = revisionsRepositoryPlugin.getRevisions();
    const suggestionsData = trackChanges.getSuggestions(
      {
        skipEmpty: true
      }
    );
    const commentThreadsData = comments.getCommentThreads({
      skipNotAttached: true,
      skipEmpty: true
    });

    console.log('Editor data:');
    console.log(editorData);
    console.log('Suggestions data:');
    console.log(suggestionsData);
    console.log('Comment threads data:');
    console.log(commentThreadsData);
    console.log('Revisions data:');
    console.log(revisionsData);

    evt.preventDefault();
  }

  private checkPendingActions(domEvt): void {
    if (this.editor.plugins.get('PendingActions').hasAny) {
      domEvt.preventDefault();
      domEvt.returnValue = true;
    }
  }

  private refreshDisplayMode(): void {
    const annotationsUIs = this.editor.plugins.get('AnnotationsUIs');
    const sidebarElement = this.sidebarContainer.nativeElement;

    if (window.innerWidth < 1070) {
      sidebarElement.classList.remove('narrow');
      sidebarElement.classList.add('hidden');
      annotationsUIs.switchTo('inline');
    }
    else if (window.innerWidth < 1300) {
      sidebarElement.classList.remove('hidden');
      sidebarElement.classList.add('narrow');
      annotationsUIs.switchTo('narrowSidebar');
    }
    else {
      sidebarElement.classList.remove('hidden', 'narrow');
      annotationsUIs.switchTo('wideSidebar');
    }
  }

  private getInitialData(): string {
    return `
			<h2>
				Bilingual Personality Disorder
			</h2>
			<figure class="image image-style-side">
				<img src="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg" srcset="https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder.jpg, https://c.cksource.com/a/1/img/docs/sample-image-bilingual-personality-disorder_2x.jpg 2x">
				<figcaption>
					One language, one person.
				</figcaption>
			</figure>
			<p>
				This may be the first time you hear about this made-up disorder but it
				<suggestion-start name="insertion:suggestion-1:user-2"></suggestion-start>actually<suggestion-end name="insertion:suggestion-1:user-2"></suggestion-end>
				isn’t so far from the truth. Even the studies that were conducted almost half a century show
				that <strong>the language you speak has more effects on you than you realize</strong>.
			</p>
			<p>
				One of the very first experiments conducted on this topic dates back to 1964.
				<a href="https://www.researchgate.net/publication/9440038_Language_and_TAT_content_in_bilinguals">In the experiment</a>
				designed by linguist Ervin-Tripp who is an
				<suggestion-start name="deletion:suggestion-2:user-1"></suggestion-start>
				authority<suggestion-end name="deletion:suggestion-2:user-1">
				</suggestion-end>
				<suggestion-start name="insertion:suggestion-3:user-1"></suggestion-start>
				expert<suggestion-end name="insertion:suggestion-3:user-1"></suggestion-end>
				in psycholinguistic and sociolinguistic studies, adults who are bilingual
				in English in French were showed series of pictures and were asked to create 3-minute stories.
				In the end participants emphasized
				drastically different dynamics for stories in English and French.
			</p>
			<p>
				Another ground-breaking experiment which included bilingual Japanese women married to American men
				<suggestion-start name="deletion:suggestion-4:user-1"></suggestion-start>in San
				Francisco <suggestion-end name="deletion:suggestion-4:user-1">
				</suggestion-end>were
				asked to complete sentences. The goal of the experiment was to investigate whether or not human
				feelings and thoughts
				are expressed differently in <strong>different language mindsets</strong>.
			</p>
			<p data-suggestion-start-before="formatBlock:698dn3otqzd6:suggestion-6:user-2">
				Here is a sample from the the experiment:
				<suggestion-end name="formatBlock:698dn3otqzd6:suggestion-6:user-2"></suggestion-end>
			</p>
			<table>
				<thead>
					<tr>
						<th></th>
						<th>English</th>
						<th>Japanese</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>Real friends should</td>
						<td>Be very frank</td>
						<td>Help each other</td>
					</tr>
					<tr>
						<td>I will <suggestion-start name="formatInline:886cqig6g8rf:suggestion-5:user-2"></suggestion-start>probably<suggestion-end name="formatInline:886cqig6g8rf:suggestion-5:user-2" suggestion-type="formatInline:886cqig6g8rf"></suggestion-end> become</td>
						<td>A teacher</td>
					<td>A housewife</td>
					</tr>
					<tr>
						<td>When there is a conflict with family</td>
						<td>I do what I want</td>
						<td>It's a time of great unhappiness</td>
					</tr>
				</tbody>
			</table>
			<p>
				More recent <a href="https://books.google.pl/books?id=1LMhWGHGkRUC">studies</a> show, the
				language a person speaks affects
				their cognition, behavior, emotions and hence <strong>their personality</strong>.
				This shouldn’t come as a surprise
				<a href="https://en.wikipedia.org/wiki/Lateralization_of_brain_function">since we already know</a>
				that different regions of the brain become more active depending on the person’s activity at hand.
				The structure, information and especially <strong>the culture</strong> of languages varies
				substantially and the language a person speaks is an essential element of daily life.
			</p>
		`;
  }
}
